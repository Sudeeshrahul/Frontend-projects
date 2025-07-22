function convertData(value,type){
    if(type === 'number') return parseFloat(value);
    if(type === 'boolean') return value.toLowerCase() === "true";
    if(type == 'symbol') return Symbol(value);
        return toString(value);

}

function getInputs(){
    let val$1  = document.getElementById('oneIn').value;
    let val$2  = document.getElementById('select1').value;
    let val$3  = document.getElementById('twoIn').value;
    let val$4  = document.getElementById('select2').value;

    return{
        value1 : convertData(val$1,val$2),
        value2 : convertData(val$3, val$4)
    }
}

function andEqualTo(){
    let {value1,value2} = getInputs();

    document.getElementById('output').innerText = value1 &&= value2;
}