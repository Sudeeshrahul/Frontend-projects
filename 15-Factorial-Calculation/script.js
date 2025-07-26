function factroilCalculation(){
    let val$ = parseFloat(document.getElementById('Factroil').value);

    if(isNaN(val$)){
        document.getElementById('out').innerText = "Enter corect number";
        return;
    }
    if(val$ === 0 || val$ === 1){
        document.getElementById('out').innerHTML = val$;
        return;
    }
    let i = 1, fact = 1;  
    do{
        fact = fact * i;
        i++;
    }while(i <= val$) 

    document.getElementById('out').innerHTML = fact;
}