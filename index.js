// References to DOM elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

const aboutBookmark = document.querySelector("#about-bookmark");
const skillsBookmark = document.querySelector("#skills-bookmark");
const workBookmark = document.querySelector("#work-bookmark");
const connectBookmark = document.querySelector("#connect-bookmark");

// Event listeners for button or bookmark clicks
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
aboutBookmark.addEventListener("click", goAboutPage);
skillsBookmark.addEventListener("click", goSkillsPage);
workBookmark.addEventListener("click", goWorkPage);
connectBookmark.addEventListener("click", goConnectPage);

// Button click navigation logic
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
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
//NOTE:REMOVE "FLIPPED" FOR MOBILE TO KEEP IT VIEWABLE ON ONE CARD
//Bookmark click navigation logic
function goAboutPage() { 
    if(currentLocation >= 1) {
        switch(currentLocation) {
            case 1: 
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
            case 2:
                break; 
            case 3: 
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4; 
                break;
            case 4: 
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 5: 
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 6: 
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation = 2;
    }
}

function goSkillsPage() { 
    if(currentLocation >= 1) {
        switch(currentLocation) {
            case 1: 
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 2: 
                paper2.classList.add("flipped");
                paper2.style.zIndex = 4;
                break; 
            case 3: 
                break;
            case 4: 
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5: 
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 6: 
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation = 3;
    }
}

function goWorkPage() { 
    if(currentLocation >= 1) {
        switch(currentLocation) {
            case 1: 
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 2;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 3;
                paper3.classList.add("flipped");
                paper3.style.zIndex = 4;
                break;
            case 2: 
                paper2.classList.add("flipped");
                paper2.style.zIndex = 3;
                paper3.classList.add("flipped");
                paper3.style.zIndex = 4;
                break; 
            case 3: 
                paper3.classList.add("flipped");
                paper3.style.zIndex = 4;
                break;
            case 4: 
                break;
            case 5: 
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 3;
            case 6: 
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation = 4;
    }
}

function goConnectPage() {
    if(currentLocation >= 1) {
        switch(currentLocation) {
            case 1: 
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 2;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 3;
                paper3.classList.add("flipped");
                paper3.style.zIndex = 4;
                paper4.classList.add("flipped");
                paper4.style.zIndex = 5;
                break;
            case 2: 
                paper2.classList.add("flipped");
                paper2.style.zIndex = 3;
                paper3.classList.add("flipped");
                paper3.style.zIndex = 4;
                paper4.classList.add("flipped");
                paper4.style.zIndex = 5;
                break; 
            case 3: 
                paper3.classList.add("flipped");
                paper3.style.zIndex = 4;
                paper4.classList.add("flipped");
                paper4.style.zIndex = 5;
                break;
            case 4: 
                paper4.classList.add("flipped");
                paper4.style.zIndex = 5;
                break;
            case 5: 
                break;
            case 6: 
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 5;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation = 5;
    }
}

//Logic to highlight icon for current page
function showCurrentPage() {
    if(currentLocation >= 1) {
        switch(currentLocation) {
            case 1: 
                break;
            case 2:
                aboutBookmark.style.color = "white";
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                throw new Error("unknown state");
        }
    }
}
