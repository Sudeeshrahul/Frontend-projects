// functions to convert the input data type to the selected type
function conversion(value,type){
    if(type === "number") return parseFloat(value);
    if(type === "boolean") return value.toLowerCase() === "true";
    return value.toString();
}

//function to gather inputs
function getInputs(){
   let val$1 = document.getElementById('oneIn').value;
   let val$2 = document.getElementById('twoIn').value;
   let type$1 = document.getElementById('select1').value;
   let type$2 = document.getElementById('select2').value;


   return {
    value1 : conversion(val$1,type$1),
    value2 : conversion(val$2,type$2)
   }
}

//function for logical && 
function logicalAnd(){
    let {value1,value2} = getInputs();
    document.getElementById('output').innerHTML = `Returns true if both inputs are true <br></br> Output : ${value1 && value2}`;
}

//function for logical ||
function logicalOr(){
    let { value1, value2} = getInputs();
    document.getElementById('output').innerHTML = `Returns true if atLest one inputs is true <br></br> Output : ${value1 || value2}`;
}

// function for logical not operator
function logicalNot(){
    let {value1,value2} = getInputs();
    document.getElementById('output').innerHTML = !value1 == !value2;
}