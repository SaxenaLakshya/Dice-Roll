let n1 = Math.floor((Math.random() * 6) + 1);
let n2 = Math.floor((Math.random() * 6) + 1);

// Declaring the winner
if (n1 > n2)
    document.querySelector("h1").innerHTML = "Player 1 wins!";
else if (n1 < n2)
    document.querySelector("h1").innerHTML = "Player 2 wins!"
else
    document.querySelector("h1").innerHTML = "Its a Tie!";

// For Dice 1
if (n1 == 1) {
    document.getElementById("11").classList.add("hidden");
    document.getElementById("12").classList.add("hidden");
    document.getElementById("13").classList.add("hidden");
    document.getElementById("15").classList.add("hidden");
    document.getElementById("16").classList.add("hidden");
    document.getElementById("17").classList.add("hidden");
}
else if (n1 == 2) {
    document.getElementById("12").classList.add("hidden");
    document.getElementById("13").classList.add("hidden");
    document.getElementById("14").classList.add("hidden");
    document.getElementById("15").classList.add("hidden");
    document.getElementById("16").classList.add("hidden");
}
else if (n1 == 3) {
    document.getElementById("12").classList.add("hidden");
    document.getElementById("13").classList.add("hidden");
    document.getElementById("15").classList.add("hidden");
    document.getElementById("16").classList.add("hidden");
}
else if (n1 == 4) {
    document.getElementById("13").classList.add("hidden");
    document.getElementById("14").classList.add("hidden");
    document.getElementById("15").classList.add("hidden");
}
else if (n1 == 5) {
    document.getElementById("13").classList.add("hidden");
    document.getElementById("15").classList.add("hidden");
}
else {
    document.getElementById("14").classList.add("hidden");
}

// For Dice 2
if (n2 == 1) {
    document.getElementById("22").classList.add("hidden");
    document.getElementById("23").classList.add("hidden");
    document.getElementById("21").classList.add("hidden");
    document.getElementById("25").classList.add("hidden");
    document.getElementById("26").classList.add("hidden");
    document.getElementById("27").classList.add("hidden");
}
else if (n2 == 2) {
    document.getElementById("22").classList.add("hidden");
    document.getElementById("23").classList.add("hidden");
    document.getElementById("24").classList.add("hidden");
    document.getElementById("25").classList.add("hidden");
    document.getElementById("26").classList.add("hidden");
}
else if (n2 == 3) {
    document.getElementById("22").classList.add("hidden");
    document.getElementById("23").classList.add("hidden");
    document.getElementById("25").classList.add("hidden");
    document.getElementById("26").classList.add("hidden");
}
else if (n2 == 4) {
    document.getElementById("23").classList.add("hidden");
    document.getElementById("24").classList.add("hidden");
    document.getElementById("25").classList.add("hidden");
}
else if (n2 == 5) {
    document.getElementById("23").classList.add("hidden");
    document.getElementById("25").classList.add("hidden");
}
else {
    document.getElementById("24").classList.add("hidden");
}

