//References to DOM elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

const frontPapers = document.querySelectorAll(".front");

const aboutBookmark = document.querySelector("#about-bookmark");
const skillsBookmark = document.querySelector("#skills-bookmark");
const workBookmark = document.querySelector("#work-bookmark");
const connectBookmark = document.querySelector("#connect-bookmark");

//Recognizing when user is on mobile in order to not move book in openBook function. 
let mobile = window.matchMedia("(max-width: 480px)");

//Event listeners for button or bookmark clicks
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
aboutBookmark.addEventListener("click", goAboutPage);
skillsBookmark.addEventListener("click", goSkillsPage);
workBookmark.addEventListener("click", goWorkPage);
connectBookmark.addEventListener("click", goConnectPage);

//Keeping track of page location
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

//Open book on desktop moves it sideways to fit two pages, mobile stays centered on one page
function openBook() {
    if (mobile.matches) {
        book.style.transform = "translateX(0%)";
    }
    else {
        book.style.transform = "translateX(50%)";
    }
}

//Close book on desktop moves it back to center, mobile already on center so no move
function closeBook(isAtBeginning) {
    if (isAtBeginning || mobile.matches) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

//Note: position of book after open/close may not be as expected if you switch between desktop and dev tools mobile view during session. Actual mobile or desktop users won't switch between those dimensions and will have a consistent experience.

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 0;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 0;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 0;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 0;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 1;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}

//Bookmark click navigation logic
function goAboutPage() {
    if (currentLocation >= 1) {
        switch (currentLocation) {
            case 1:
                openBook();
                goNextPage();
            case 2:
                break;
            case 3:
                goPrevPage();
                break;
            case 4:
                goPrevPage();
                goPrevPage();
                break;
            case 5:
                goPrevPage();
                goPrevPage();
                goPrevPage();
                break;
            case 6:
                openBook();
                goPrevPage();
                goPrevPage();
                goPrevPage();
                goPrevPage();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation = 2;
    }
}

function goSkillsPage() {
    if (currentLocation >= 1) {
        switch (currentLocation) {
            case 1:
                openBook();
                goNextPage();
                goNextPage();
                break;
            case 2:
                goNextPage();
                break;
            case 3:
                break;
            case 4:
                goPrevPage();
                break;
            case 5:
                goPrevPage();
                goPrevPage();
                break;
            case 6:
                openBook();
                goPrevPage();
                goPrevPage();
                goPrevPage();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation = 3;
    }
}

function goWorkPage() {
    if (currentLocation >= 1) {
        switch (currentLocation) {
            case 1:
                openBook();
                goNextPage();
                goNextPage();
                goNextPage();
                break;
            case 2:
                goNextPage();
                goNextPage();
                break;
            case 3:
                goNextPage();
                break;
            case 4:
                break;
            case 5:
                goPrevPage(); 
                goNextPage(); //break from pattern required
                goNextPage();
            case 6:
                openBook();
                goPrevPage();
                goPrevPage();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation = 4;
    }
}

function goConnectPage() {
    if (currentLocation >= 1) {
        switch (currentLocation) {
            case 1:
                openBook();
                goNextPage();
                goNextPage();
                goNextPage();
                goNextPage();
                break;
            case 2:
                goNextPage();
                goNextPage();
                goNextPage();
                break;
            case 3:
                goNextPage();
                goNextPage();
                break;
            case 4:
                goNextPage();
                break;
            case 5:
                break;
            case 6:
                openBook();
                goPrevPage();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation = 5;
    }
}

//This code is written for the edge case of devs who may inspect a mobile version in dev tools. Switching from desktop to mobile view would otherwise mess with the placement, but this re-centers the book after such an action.
window.onresize = centerBook;
function centerBook() {
    if (currentLocation != maxLocation) {
        if (mobile.matches) {
            book.style.transform = "translateX(0px)";
        }
        else if (currentLocation != 1) {
            book.style.transform = "translateX(50%)";
        }
    }
    else if ((currentLocation = maxLocation) && !mobile.matches) {
        book.style.transform = "translateX(100%)";
    }
}

//Note for those checking out my code in dev tools
console.log("Hi there! Thank you for checking out my code! Please note that this portfolio intentionally offers a different experience for mobile and desktop users. Mobile shows one page for each chapter to give people the quick details, while desktop has two pages with more info. I've built in code to account for the edge case you might switch mobile and desktop views, to re-center the book according to your new view, but it is expected behavior the page count will differ. Happy coding! ~Phil");