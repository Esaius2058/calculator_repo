/*operator = document.getElementById('operator');
num1 = document.getElementById('num1');
num2 = document.getElementById('num2');*/

var num1, num2;

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}


function operate(operation, num1, num2){
    if(operation == "add"){
        return add(num1, num2);
    }
    else if(operation == "subtract"){
        return subtract(num1, num2);
    }
    else if(operation == "multiply"){
        return multiply(num1, num2);
    }
    else if(operation == "divide"){
        return divide(num1, num2);
    }

    /*var operation = document.getElementById("operation").value;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = 0;
    if(operation == "add"){
        result = add(num1, num2);
    }
    else if(operation == "subtract"){
        result = subtract(num1, num2);
    }
    else if(operation == "multiply"){
        result = multiply(num1, num2);
    }
    else if(operation == "divide"){
        result = divide(num1, num2);
    }
    document.getElementById("result").innerHTML = result;  
    */
}