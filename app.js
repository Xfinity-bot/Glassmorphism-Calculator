function screenclear() {
    document.getElementById("screen").innerHTML = "00";
}
function removeZero() {
    var value = document.getElementById("screen").innerHTML;
    if (value == "00") {
         value = " "
         document.getElementById("screen").innerHTML = value;
    }
}

function display(value) {
    removeZero()
    document.getElementById("screen").innerHTML += value;
}
function solve() {
    removeZero()
    var equation = document.getElementById("screen").innerHTML;
    var solved = eval(equation);
    document.getElementById('screen').innerHTML = solved;
}