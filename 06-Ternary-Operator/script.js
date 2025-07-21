
function convertingInputsToData(value   ){
    
    if (value === String) return value.toString();
    return parseFloat(value);
     

}
function getInputs(){
    let val$1 = document.getElementById('firstName').value;
    let val$2 = document.getElementById('lastName').value;
    let val$3 = document.getElementById('age').value;

    return {
        value1 : val$1,
        value2 : val$2,
        value3 : val$3

    }
}

function checkData(){
    let {value1, value2, value3} = getInputs();
    
    let name = `${value1} ${value2}`
    let age = value3 >= 18 ? `Hello ${name} welcome to apty` : `Hello ${name} comeback after  ${18 - value3} years`;

    document.getElementById('output').innerText = age;
}