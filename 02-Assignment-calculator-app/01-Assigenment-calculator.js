
//function for +add left-hand value with right hand value
function plusEqualsTo(){
    let inputNumber1 = parseFloat(document.getElementById('number1').value);
    let inputNumber2 = parseFloat(document.getElementById('number2').value);

     let out = inputNumber1 + inputNumber2;
    document.getElementById('output').innerText = inputNumber1 += out;
}


//function for -minus left-hand value from right hand value & return result
function minusEqualTo(){
    let inputNumber1 = parseFloat(document.getElementById('number1').value);
    let inputNumber2 = parseFloat(document.getElementById('number2').value);

     let out = inputNumber1 - inputNumber2;
    document.getElementById('output').innerText = inputNumber1 -= out;
}

//function for *multiply left-hand value with right hand value & return result
function multiplyEqualTo(){
    let inputNumber1 = parseFloat(document.getElementById('number1').value);
    let inputNumber2 = parseFloat(document.getElementById('number2').value);

     let out = inputNumber1 * inputNumber2;
    document.getElementById('output').innerText = inputNumber1 *= out;
}

//function for /divide  left-hand value with  right hand value & return result
function divideEqualTo(){
    let inputNumber1 = parseFloat(document.getElementById('number1').value);
    let inputNumber2 = parseFloat(document.getElementById('number2').value);

    if (inputNumber1 > 0) {
         let out = inputNumber1 / inputNumber2;
        document.getElementById('output').innerText = inputNumber1 /= out;
    } else {
        document.getElementById('output').innerText = "cant divisible by 0";
    }
}

//function for %modlus left-hand value with  right hand value & return result
function modulusEqualTo(){
    let inputNumber1 = parseFloat(document.getElementById('number1').value);
    let inputNumber2 = parseFloat(document.getElementById('number2').value);

     if (inputNumber1 > 0) {
        let out = inputNumber1 % inputNumber2;
       document.getElementById('output').innerText = inputNumber1 %= out;
     } else {
        document.getElementById('output').innerText = "cant divisible by 0";
     }
}

//function to increment the input value 
function increment(){
    let inputNumber1 = parseFloat(document.getElementById('number1').value);
    // return result back to input value by incrementing
    document.getElementById('number1').value = inputNumber1 + 1;
}

function decrement(){
    let inputNumber1 = parseFloat(document.getElementById('number1').value);
    // return result back to input value by decrementing
    document.getElementById('number1').value = inputNumber1 - 1;
}