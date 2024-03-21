function swap(element){
    document.getElementById("statMenu").style.display = 'none';
    document.getElementById("diceMenu").style.display = 'none';
    document.getElementById(element).style.display = 'grid';
}

playerUrl = document.getElementById("playerUrl");
playerUrl.addEventListener("change", (event) => {
    if (playerUrl.value == ""){
        document.getElementById("playerImg").src = "helmet.png"
    }
    else {
        document.getElementById("playerImg").src = document.getElementById("playerUrl").value;
    }
});
document.getElementById("playerImg").addEventListener("error", function(event) {
    event.target.src = "./helmet.png";
    event.onerror = null;
})

