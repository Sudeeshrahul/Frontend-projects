



function add(){
    const inputNumber1 = parseFloat(document.getElementById('number1').value);
    const inputNumber2 = parseFloat(document.getElementById('number2').value);
    
    let number1 = inputNumber1;
    let number2 = inputNumber2;
    
    let addition = number1 + number2;
    document.getElementById('output').innerText = "Equal's To : "+addition;
}

function subtract(){
    const inputNumber1 = parseFloat(document.getElementById('number1').value);
    const inputNumber2 = parseFloat(document.getElementById('number2').value);

    let subtract = inputNumber1 - inputNumber2;
    
    document.getElementById('output').innerHTML = "Equal's To : "+subtract;
}

function multiply(){
    const inputNumber1 = parseFloat(document.getElementById('number1').value);
    const inputNumber2 = parseFloat(document.getElementById('number2').value);

    let multiply = inputNumber1 * inputNumber2;

    document.getElementById('output').innerText = "Equal's To : "+multiply;
}

function division(){
    const inputNumber1 = parseFloat(document.getElementById('number1').value);
    const inputNumber2 = parseFloat(document.getElementById('number2').value);

    if(inputNumber1 > 0 && inputNumber2 > 0){
        let division = inputNumber1 / inputNumber2;
        document.getElementById('output').innerText = "Equal's To : "+division;
    }else{
        document.getElementById('output').innerText = "Equal's To : Number Can't divisible by 0 ";
    }
}

function modulus(){
    const inputNumber1 = parseFloat(document.getElementById('number1').value);
    const inputNumber2 = parseFloat(document.getElementById('number2').value);

    if(inputNumber1 > 0 && inputNumber2 > 0){
        let modulus = inputNumber1 % inputNumber2;
        document.getElementById('output').innerText = "Equal's To : "+modulus;
    }else{
        document.getElementById('output').innerText = "Equal's To : Number Can't divisible by 0 ";
    }
   
}

function increment(){
    
}
