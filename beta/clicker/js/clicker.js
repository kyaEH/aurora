// On click, add 1 to score
var score = parseInt(document.getElementById("score").innerHTML);
//on mouse released add 1 to the score
function addScore() {
    score++;
    document.getElementById("score").innerHTML = score;
    document.getElementById("clicker").style.transform = "scale(1)";
    if (score >= 10) {
        document.getElementById("autoclick").disabled = false;
    }
    if (score >= 1000) {
        document.getElementById("fastautoclick").disabled = false;
    }
}

document.getElementById("clicker").addEventListener("mouseup", addScore);

// On click, change the scale
document.getElementById("clicker").addEventListener("mousedown", function() {
    document.getElementById("clicker").style.transform = "scale(0.98)";
});

/*
<button id="autoclick" disabled>Buy autoclick (price: <span id="priceauto">10</span>)</button>
            <button id="fastautoclick" disabled>Buy ultra autoclick (price: <span id="pricefauto">1000</span>)</button>
            */

// Use autoclick with interval of 1000ms to add 1 to score, wich can be upgraded by the price of 10 + 10 points per level
var autoclick = 0;
var fastautoclick = 0;

function buyAutoClick() {

    var price = 10 + 10 * autoclick;
    if (score >= price) {
        score -= price;
        document.getElementById("score").innerHTML = score;
        autoclick++;
        document.getElementById("priceauto").innerHTML = 10 + 10 * autoclick;
        document.getElementById("autoclick").disabled = false;
        autoclick++;
    }
}

function buyFastAutoClick() {
    var price = 1000 + 500 * fastautoclick;
    if (score >= price) {
        score -= price;
        document.getElementById("score").innerHTML = score;
        fastautoclick++;
        document.getElementById("pricefauto").innerHTML = 1000 + 500 * fastautoclick;
        document.getElementById("fastautoclick").disabled = false;
        fastautoclick++;
    }
}


setInterval(function() {
    if(autoclick != 0) {    
        score += autoclick;
        document.getElementById("score").innerHTML = score;
    }
}, 1000);

setInterval(function() {
    if(fastautoclick != 0) {    
        score += fastautoclick;
        document.getElementById("score").innerHTML = score;
    }
}, 100);

document.getElementById("autoclick").addEventListener("click", buyAutoClick);
document.getElementById("fastautoclick").addEventListener("click", buyFastAutoClick);