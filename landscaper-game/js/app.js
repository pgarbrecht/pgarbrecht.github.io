//PLAYER OBJECT
const player = {
    currentTool: "teeth",
    availableTools: ["teeth"],
    currentMoney: 0
}

//DISPLAYING PLAYER STATS
function displayStats() {
    document.querySelector(".show-available-tools").innerHTML = player["availableTools"];
    document.querySelector(".show-current-tool").innerHTML = player["currentTool"];
    document.querySelector(".show-money").innerHTML = player["currentMoney"];
}
window.onload = (event) => {
    displayStats();
  };

//BUYING FUNCTIONS
//Buy scissors
function buyScissors() {
    if((player["currentMoney"] > 4) && (player["availableTools"].includes("scissors") === false)) {
        player["currentTool"] = "scissors";
        player["availableTools"].push(" scissors");
        player["currentMoney"] -= 5;
        displayStats();
    }
}
//Buy push mower
function buyPushMower() {
    if((player["currentMoney"] > 24) && (player["availableTools"].includes("push mower") === false)) {
        player["currentTool"] = "push mower";
        player["availableTools"].push(" push mower");
        player["currentMoney"] -= 25;
        displayStats();
    }
}
//Buy electric mower
function buyElectricMower() {
    if((player["currentMoney"] > 249) && (player["availableTools"].includes("electric mower") === false)) {
        player["currentTool"] = "electric mower";
        player["availableTools"].push(" electric mower");
        player["currentMoney"] -= 250;
        displayStats();
    }
}
//Hire a team to cut
function hireTeam() {
    if((player["currentMoney"] > 499) && (player["availableTools"].includes("team") === false)) {
        player["currentTool"] = "team";
        player["availableTools"].push(" team");
        player["currentMoney"] -= 500;
        displayStats();
    }
}

//CUTTING FUNCTION
function cutFunction() {
  if(player["currentTool"] === "teeth") {
    player["currentMoney"] += 1;
    document.querySelector(".show-money").innerHTML = player["currentMoney"];
    }
    else if(player["currentTool"] === "scissors") {
        player["currentMoney"] += 5;
        document.querySelector(".show-money").innerHTML = player["currentMoney"];
        }
    else if(player["currentTool"] === "push mower") {
        player["currentMoney"] += 50;
        document.querySelector(".show-money").innerHTML = player["currentMoney"];
        }
    else if(player["currentTool"] === "electric mower") {
        player["currentMoney"] += 100;
        document.querySelector(".show-money").innerHTML = player["currentMoney"];
        }
    else if(player["currentTool"] === "team") {
        player["currentMoney"] += 250;
        document.querySelector(".show-money").innerHTML = player["currentMoney"];
        }
  }

//WIN FUNCTION
var modal = document.getElementById("winModal");
function win() {
    if(player["currentMoney"] > 999) {
            modal.style.display = "block";
    }
}

document.querySelector(".close").onclick = function close() {
    modal.style.display = "none";
  }
