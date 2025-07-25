function FindLargestNumber(){
    let val$1 = parseFloat(document.getElementById('number1').value);
    let val$2 = parseFloat(document.getElementById('number2').value);
    let val$3 = parseFloat(document.getElementById('number3').value);

    if(val$1 > val$2 && val$1 > val$3){
        document.getElementById('output').value = `${val$1} is Greater`;
    }else if(val$1 < val$2 && val$3 < val$2){
        document.getElementById('output').value = `${val$2} is Greater`;
    }else if( val$1 < val$3 && val$2 < val$3){
        document.getElementById('output').value = `${val$3} is Greater`;
    }
}