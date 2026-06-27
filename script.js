// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Display the sum
let sum = addNumbers(25, 15);

document.getElementById("output").innerHTML =
    "<h2>Sum of Numbers</h2>";
document.getElementById("output").innerHTML +=
    "25 + 15 = " + sum + "<br><br>";

// Trigonometric values
let degree = 45;
let radian = degree * (Math.PI / 180);

document.getElementById("output").innerHTML +=
    "<h2>Trigonometric Values of 45°</h2>";

document.getElementById("output").innerHTML +=
    "Sin(45°) = " + Math.sin(radian).toFixed(2) + "<br>";

document.getElementById("output").innerHTML +=
    "Cos(45°) = " + Math.cos(radian).toFixed(2) + "<br>";

document.getElementById("output").innerHTML +=
    "Tan(45°) = " + Math.tan(radian).toFixed(2);