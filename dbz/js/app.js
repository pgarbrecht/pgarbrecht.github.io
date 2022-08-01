//Toggle music on or off
const myAudio = document.getElementById("myAudio");
let musicButton = document.querySelector("i");
let isPlaying = false;
function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};
myAudio.onplaying = function() {
  isPlaying = true;
  musicButton.setAttribute("class", "fa-solid fa-volume-high");
};
myAudio.onpause = function() {
  isPlaying = false;
  musicButton.setAttribute("class", "fa-solid fa-volume-xmark");
};

// When the page loads, open the welcome popup
var popup = document.getElementById("welcomePopup"); 
window.onload = function welcome() {
     popup.classList.toggle("show");
  };

//Variables and event listeners for character selection
const gokuChoice = document.querySelector("#goku");
const vegetaChoice = document.querySelector("#vegeta");
const gohanChoice = document.querySelector("#gohan");
const trunksChoice = document.querySelector("#trunks");

gokuChoice.onclick = function() {
    createPlayer("Goku",["./imgs/goku/neutral.png","./imgs/goku/attack.png","./imgs/goku/fallen.png"]);
}
vegetaChoice.onclick = function() {
    createPlayer("Vegeta",["./imgs/vegeta/neutral.png","./imgs/vegeta/attack.png","./imgs/vegeta/fallen.png"]);
}
gohanChoice.onclick = function() {
    createPlayer("Gohan",["./imgs/gohan/neutral.png","./imgs/gohan/attack.png","./imgs/gohan/fallen.png"]);
}
trunksChoice.onclick = function() {
    createPlayer("Trunks",["./imgs/trunks/neutral.png","./imgs/trunks/attack.png","./imgs/trunks/fallen.png"]);
}

//Elements needed once game starts
const p1Info = document.querySelector(".p1-info");
let p1Image = document.querySelector(".p1-image");
const p1Name = document.querySelector(".p1-name");
const p1Ki = document.querySelector(".p1-ki");

const prompt = document.querySelector(".prompt");
const promptText = document.querySelector(".prompt-text");
const attackImage = document.querySelector(".attack-image");

const p2Info = document.querySelector(".p2-info");
let p2Image = document.querySelector(".p2-image");
const p2Name = document.querySelector(".p2-name");
const p2Ki = document.querySelector(".p2-ki");

let kiCollected = 0;

//Class for players
class Player {
    //static property to remember # of players created
    static lastPlayerNumber = 0;

    constructor(character,images,playerNumber,hp) {
        this.character = character || ""
        this.images = images || []
        this.playerNumber = ++Player.lastPlayerNumber
        this.hp = hp || 10000
    }
    playTurn() {
        if(this.playerNumber == 1) {
            p1Ki.textContent = `${kiCollected} Ki`;
            p1Info.style.justifyContent = "space-around";
        }
        else if(this.playerNumber == 2) {
            p2Ki.textContent = `${kiCollected} Ki`;
            p2Info.style.justifyContent = "space-around";
        }
    }
    hideKi() {
        gridItems.forEach(item => {
            item.classList.remove('ki')
        });
    }
    attack() {
        if(this.playerNumber == 1) {
            p1Image.setAttribute("src",this.images[1]);
            attackImage.setAttribute("src","./imgs/p1blast.png");
            p2Image.setAttribute("src","./imgs/explosion.png");
            p2.hp -= kiCollected;
        }
        else if(this.playerNumber == 2) {
            p2Image.setAttribute("src",this.images[1]);
            attackImage.setAttribute("src","./imgs/p2blast.png");
            p1Image.setAttribute("src","./imgs/explosion.png");
            p1.hp -= kiCollected;
        }
        setTimeout(() => {
            p1Image.setAttribute("src",p1.images[0]);
            attackImage.setAttribute("src","./imgs/transparent.png");
            p2Image.setAttribute("src",p2.images[0]);
        }, "900")
    }
    switchTurn() {
        if(this.playerNumber == 1) {
            p1Name.textContent = `P1: ${p1.character}`;
            setTimeout(() => {
                gridItems.forEach(item => { //added again to prevent odd cases of ki appearing again too soon during this set timeout
                    item.classList.remove('ki')
                });
                alert("P2 will go next.");
                p2Name.textContent = `P2: ${p2.character} GO!`;
            }, "950")
            p1Ki.textContent = "";
            p1Info.style.justifyContent = "center";
            kiCollected = 0;
            displayTime = 15;
        }
        else if(this.playerNumber == 2) {
            p2Name.textContent = `P2: ${p2.character}`;
            setTimeout(() => {
                gridItems.forEach(item => {
                    item.classList.remove('ki')
                });
                alert("Round 2: P1 will go first.");
                p1Name.textContent = `P1: ${p1.character} GO!`;
            }, "950")
            p2Ki.textContent = "";
            p2Info.style.justifyContent = "center";
            kiCollected = 0;
            displayTime = 15;
        }
    }
}

//variables to help keep track of and assign players
let charactersOnscreen = 0;
let players = [];
let p1;
let p2;

//Create new object from class when character chosen
function createPlayer(character,images) {
    const p = new Player(character,images); 
    players.push(p);
    charactersOnscreen += 1;
    removeWelcome(); //proceeds to next main function
}

//Remove the pop up once 2 players created
function removeWelcome() {
    if (charactersOnscreen > 1) {
        popup.style.display = "none";
        //adjusts style in the prompt area for mobile
        function mobileAdjust(mobileDevice) {
            if (mobileDevice.matches) {
              document.querySelector(".prompt-text").style.width = "50%";
            }
          }
        const mobileDevice = window.matchMedia("(max-width: 480px)");
        mobileAdjust(mobileDevice);
        loadGame(); //proceeds to next main function
    }
}

function loadGame() {
    // assign objects to player variables
    p1 = players[0];
    p2 = players[1];
    // show their images, character names, prompt 1
    p1Image.setAttribute("src",p1.images[0]);
    p1Name.textContent = `P1: ${p1.character}`;
    p2Image.setAttribute("src",p2.images[0]);
    p2Name.textContent = `P2: ${p2.character}`;
    p1Info.style.backgroundColor = "orange";
    p2Info.style.backgroundColor = "orange";
    prompt.style.backgroundColor = "white";
    promptText.textContent = `15 seconds to collect ki!`;
    playGame(); //proceeds to next main function
    setTimeout(() => {
        alert("Round 1: P1 will go first.");
        p1Name.textContent = `P1: ${p1.character} GO!`;
        }, "500")
}

//Elements needed to play the game
const gridItems = document.querySelectorAll(".grid-item");
const ki = document.querySelector(".ki");
let hitPosition;
let currentTime = 90;
let timerId = null;
let displayTime = 15;

function playGame() {
    function randomGridItem() {
        gridItems.forEach(item => {
            item.classList.remove('ki')
        })

        let randomGridItem = gridItems[Math.floor(Math.random() * 9)]
        randomGridItem.classList.add("ki");

        hitPosition = randomGridItem.id
    }

    gridItems.forEach(item => {
        item.addEventListener("mousedown", () => {
            if (item.id == hitPosition) {
                kiCollected += 100;
                hitPosition = null;
            }
        })
    })

    function moveKi() {
        timerId = setInterval(randomGridItem, 1000)
    }

    moveKi();

    function countDown() {
        currentTime--;
        displayTime -= 1
        promptText.textContent = `${displayTime} seconds to collect ki!`;
        //Round 1 P1
        if(currentTime >=76 && currentTime <= 90) {
            p1.playTurn();
        }
        if(currentTime == 75) {
            p1.hideKi();
            p1.attack();
            p1.switchTurn();
        }
        //Round 1 P2
        if(currentTime >=61 && currentTime <= 74) {
            p2.playTurn();
        }
        if(currentTime == 60) {
            p2.hideKi();
            p2.attack();
            p2.switchTurn();
        }
        //Round 2 P1
        if(currentTime >=46 && currentTime <= 59) {
            p1.playTurn();
        }
        if(currentTime == 45) {
            p1.hideKi();
            p1.attack();
            p1.switchTurn();
        }
        //Round 2 P2
        if(currentTime >=31 && currentTime <= 44) {
            p2.playTurn();
        }
        if(currentTime == 30) {
            p2.hideKi();
            p2.attack();
            p2.switchTurn();
        }
        //Round 3 (Final) P1
        if(currentTime >=16 && currentTime <= 29) {
            p1.playTurn();
        }
        if(currentTime == 15) {
            p1.hideKi();
            p1.attack();
            p1.switchTurn();
        }
        //Round 3 (Final) P2
      if(currentTime >=1 && currentTime <= 14) {
            p2.playTurn();
        }  
      if(currentTime == 0) {
            clearInterval(countDownTimerId);
            clearInterval(timerId);
            p2.hideKi();
            p2.attack();
            p2Name.textContent = `P2: ${p2.character}`;
            kiCollected = 0;
            endGame(); //proceeds to next main function
        }
    }
    let countDownTimerId = setInterval(countDown, 1000);
}

function endGame() {
    setTimeout(() => {
        p1Ki.textContent = `Power Level: ${(10000 - p2.hp)}`;
        p2Ki.textContent = `Power Level: ${(10000 - p1.hp)}`;
        p1Info.style.justifyContent = "space-around";
    if(p1.hp > p2.hp) {
        promptText.innerHTML = '<p>P1 wins!&nbsp;</p><button id="play-again-btn" onclick="playAgain()">Play again</button>';
        p2Image.setAttribute("src",p2.images[2]); 
    }
    else if(p2.hp > p1.hp) {
        promptText.innerHTML = '<p>P2 wins!&nbsp;</p><button id="play-again-btn" onclick="playAgain()">Play again</button>';
        p1Image.setAttribute("src",p1.images[2]); 
    }
    else if(p1.hp == p2.hp) {
        promptText.innerHTML = '<p>Tie game!&nbsp;</p><button id="play-again-btn" onclick="playAgain()">Play again</button>';
        p1Image.setAttribute("src",p1.images[2]); 
        p2Image.setAttribute("src",p2.images[2]); 
    }
    }, "900")
}

function playAgain() {
    location.reload();
}
