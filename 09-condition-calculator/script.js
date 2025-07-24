function calculate(operator){

    let number$1 = document.getElementById('number1').value;
    let number$2 = document.getElementById('number2').value;
        number$1 = parseFloat(value);
        number$2 = parseFloat(value);
    let result = 0;
    
    switch(operator){
        case "+":
            result = number$1 + number$2;
            break;
        case "-":
            result = number$1 - number$2;
            break;
        case "*":
            result = number$1 * number$2;
            break;
        case "/":
            result = ((number$1 || number$2) === 0)? "Not divisible By zero ": number$1 / number$2;
            break;
        case "%":
            result = number$1 % number$2;
            break;
        default:
            result = "error";
    }

    document.getElementById('output').value = result;
}