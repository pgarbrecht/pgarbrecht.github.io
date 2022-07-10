//Defining common elements used
const tamagotchiArea = document.querySelector(".tamagotchi-area");
const tamagotchiPicture = document.querySelector(".tamagotchi-picture");
const tip = document.querySelector(".tip");

//Creates a new tamagotchi based on class
class TamagotchiObject {
    constructor(wellness,fullness,energy,excitement,age) {
        this.wellness = wellness || 15
        this.fullness = fullness || 5
        this.energy = energy || 5
        this.excitement = excitement || 5
        this.age = age || 1
    }
    checkMood() {
        if (this.wellness < 10) {
            tamagotchiPicture.src = "imgs/sad.png";
            tip.innerText = "Oh no! Your tamagotchi is almost a tama-gone-chi!";
        }
        else if ((this.wellness >= 10) && (this.wellness < 20)) {
            tamagotchiPicture.src = "imgs/neutral.png";
            tip.innerText = "Your tamagotchi is medium-well — don't make any mis-steaks now!";
        }
        else if ((this.wellness >= 20) && (this.wellness <= 30)) {
            tamagotchiPicture.src = "imgs/happy.png"
            tip.innerText = "Woohoo! Your tamagotchi is happier than a cat in a seafood restaurant. Keep it up!";
        }
    }
    displayScore() {
        const wellness = document.querySelector(".wellness");
        const fullness = document.querySelector(".fullness");
        const excitement = document.querySelector(".excitement");
        const energy = document.querySelector(".energy");
        const age = document.querySelector(".age");
        wellness.innerHTML = `Wellness: ${this.fullness + this.excitement + this.energy}/30`;
        if(this.fullness >= 0) {
        fullness.innerHTML = `Fullness: ${this.fullness}/10`;
        }
        if(this.excitement >= 0) {
        excitement.innerHTML = `Excitement: ${this.excitement}/10`;
        }
        if(this.energy >= 0) {
        energy.innerHTML = `Energy: ${this.energy}/10`;
        }
        age.innerHTML = `Age: ${this.age}`;
    }
    updateWellness() {
        this.wellness = this.fullness + this.excitement + this.energy;
    }
    giveName() {
        let customName = document.querySelector(".title");
        let namePrompt = prompt("What name would you like to give your tamagotchi?")
            if (namePrompt != null) {
                customName.innerHTML = `My Tamagotchi: ${namePrompt}`;
            }
    }
    feed() {
        if(tamagotchiPicture.id == "hatched" && this.fullness < 10 && this.wellness > 0) {
        this.fullness += 1;
        this.updateWellness();
        this.displayScore();
        this.checkMood();
        }
    }
    play() {
        if(tamagotchiPicture.id == "hatched" && this.excitement < 10 && this.wellness > 0) {
            this.excitement += 1;
            this.updateWellness();
            this.displayScore();
            this.checkMood();
            }
    }
    nap() {
        if(tamagotchiPicture.id == "hatched" && this.energy < 10 && this.wellness > 0) {
            this.energy += 1;
            this.updateWellness();
            this.displayScore();
            this.checkMood();
        }
    }
    die() {
        if(tamagotchiPicture.id == "hatched" && this.wellness < 1) {
            tip.innerHTML = '<p>Alas, your little tamagotchi has gone to a better place...&nbsp;</p><button id="play-again-btn" onclick="playAgain()">Play again!</button>';
            tamagotchiPicture.src = "imgs/dead.png";
            /* stop moving tombstone up and down*/
            tamagotchiPicture.style.animation = "null";
        }
    }
}

const tamagotchi = new TamagotchiObject();

//When egg clicked, will show tomagatchi image, new tip appears, start timers
tamagotchiPicture.addEventListener("click", hatch);

//this timer is initial value for decreasing fullness, excitement, and energy values
let timer = 20000

    function hatch() {
        if(tamagotchiPicture.id != "hatched") {
            tamagotchiPicture.src = "imgs/neutral.png";
            tip.innerText = "Ta da! Now keep the tamagotchi alive with the controls below. The more it ages, the harder it gets.";
            tamagotchiPicture.setAttribute("id","hatched");
            tamagotchi.displayScore();
            //increases age every 20 seconds if not dead
            setInterval(function () {
                if(tamagotchi.wellness > 0) {
                tamagotchi.age += 1;
                tamagotchi.displayScore()
                }
            }, 10000);
            //reduces fullness, excitement, energy by 1 at increasingly faster interval
            decreaseInterval = setInterval(function decreaser () {
                if(tamagotchi.fullness > 0) {
                tamagotchi.fullness -= 1;
                }
                if(tamagotchi.excitement > 0) {
                tamagotchi.excitement -= 1;
                }
                if(tamagotchi.energy > 0) {
                tamagotchi.energy -= 1;
                }
                tamagotchi.displayScore();
                tamagotchi.updateWellness(); 
                tamagotchi.checkMood();
                tamagotchi.die()
                timer = 20000/tamagotchi.age;
                clearInterval(decreaseInterval);
                myInterval = setInterval(decreaser,timer)
            }, timer);
        }
    }

//Event listeners for control clicks
document.querySelector(".name-control").addEventListener("click", (e) =>{
    tamagotchi.giveName()
});
document.querySelector(".feed-control").addEventListener("click", (e) =>{
    tamagotchi.feed()
});
document.querySelector(".play-control").addEventListener("click", (e) =>{
    tamagotchi.play()
});
document.querySelector(".nap-control").addEventListener("click", (e) =>{
    tamagotchi.nap()
});

function playAgain() {
    location.reload();
}
