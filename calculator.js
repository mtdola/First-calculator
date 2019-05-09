/*eslint-env browser*/


function calc() {  
    
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if(op == "add") {
        calculate = a + b;
    } 
    else if(op == "sub") {
        calculate = a - b;
    }
    else if(op == "mult") {
        calculate = a * b;
    }
    else if(op == "div") {
        calculate = a / b;
    }
    
    document.querySelector("#result").innerHTML = "Your result is: " + calculate;
    // document.getElementById("#result").style = "display: block;"
}

document.getElementById("calc").addEventListener("click", calc);