let display = document.getElementById("display");
let password = "0224"; // example: FEB 24


function pressNum(num) {
    if (display.innerText.length < 6) {
        display.innerText += num;
    }
}

function clearDisplay() {
    display.innerText = "";
}


function checkPass() {
    if (display.innerText === password) {
        window.location.href = "page3.html"; 
    } else {
        window.location.href = "page2.html";
    }
}

