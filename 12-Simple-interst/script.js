function simpleIntrest(){
    let val$1 = parseFloat(document.getElementById('amount').value);
    let val$2 = parseFloat(document.getElementById('intrest').value);
    let val$3 = parseFloat(document.getElementById('time').value);
    let out =  document.getElementById('output');

    //input validation
    const valid = [ val$1, val$2, val$3].every(v => Number.isFinite(v)&& v > 0);

    if(!valid){
       out.textContent = `plese enter a positive value`;
       return;
    } 

    let res = 0;
    if(val$1 > 0 && val$2 > 0 && val$3 > 0){
       res = (val$1 * val$2 * val$3) / 100; 
    }
    document.getElementById('output').innerHTML = res.toFixed(4);
}