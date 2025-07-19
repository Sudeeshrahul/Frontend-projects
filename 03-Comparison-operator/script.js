//function to convert input value to selected data type

function conversion(value, type) {
    if (type === "number") return parseFloat(value);
    if (type === "boolean") return value.toLowerCase() === "true";
    return value.toString(); 
}

//function to gather inputs
function getInputs(){
    let value1 = document.getElementById('oneIn').value;
    let value2 = document.getElementById('twoIn').value;
    let type1 = document.getElementById('select1').value;
    let type2 = document.getElementById('select2').value;

    return {
        value11 : conversion(value1,type1),
        value22 : conversion(value2, type2)
    }
}

//loss-ly compare the two values
function lossEqualTo(){
    let {value11 , value22} = getInputs();

    document.getElementById('output').innerHTML = `Output : ${value11 == value22}` ;
}

//strictly compare the values & data types
function strictEqualTo(){
    let { value11 , value22} = getInputs();

    document.getElementById('output').innerHTML = `Output : ${value11 === value22}` ;
}

//
function notEqualTo(){
    let { value11, value22} = getInputs();

    document.getElementById('output').innerHTML = `Output : ${value11 != value22}` ;
}

function notEqualType(){
    let { value11, value22} = getInputs();

    document.getElementById('output').innerHTML = `Output : ${value11 !== value22}` ;
}

function greaterThan(){
    let { value11, value22} = getInputs();

    document.getElementById('output').innerHTML = `Output : ${value11 > value22}` ;
}

function lessThan(){
    let { value11, value22} = getInputs();

    document.getElementById('output').innerHTML = `Output : ${value11 < value22}` ;
}

function greaterThenOrEqualTo(){
    let { value11, value22} = getInputs();

    document.getElementById('output').innerHTML = `Output : ${value11 >= value22}` ;
}

function lesserThenOrEqualTo(){
    let { value11, value22} = getInputs();

    document.getElementById('output').innerHTML = `Output : ${value11 <= value22}` ;
}