function convertUserInput(value){
     return parseFloat(value);
}

function getInputs(){
    let val$ = document.getElementById('userInput').value;

    return {
        value1 : val$,
    }
}
// 90+ => Grade A, 75-89 => Grade B, 50-74 => Grade C, Below 50 => Grade F -->
function gradingSystem(){
    let {value1} = getInputs();

    switch(true){
        case (value1 > 100):
            document.getElementById('output').innerHTML = "Be fair with marks Don't cheat :(";
            break;
        case (value1 >= 90) :
            document.getElementById('output').innerHTML = "gread A" ;
            break;
        case (value1 <= 89 && value1 >= 75):
            document.getElementById('output').innerHTML = "gread B" ;
            break;
        case (value1 <= 74 && value1 >= 50):
            document.getElementById('output').innerHTML = "gread C" ;
            break;
        case (value1 <= 50):
            document.getElementById('output').innerHTML = "gread F" ;
    }
}