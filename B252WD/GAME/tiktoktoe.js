var options = ["X","O"];
var selectedOption = 0;
var currentPlayer = options[selectedOption];
function handleClick(id){
    var currentBOx = document.getElementById("b" + id).innerText;
    if(currentBox == ""){
        currentPlayer = options[(selectedOption++) % 2];
        document.getElementById("b" + id).innerText = currentPlayer;
    }
}
