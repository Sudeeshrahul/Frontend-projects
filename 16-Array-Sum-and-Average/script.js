function input(){
    let input = prompt("Seperate the Numbers using comma");
   
    if(!input){
        document.getElementById('out').innerHTML = "please enter a correct number";
        return;
    }
    const arr  = input.split(",");

    let sum = 0;
    for(let i of arr)
    {
        sum += Number(i);
    }
    document.getElementById('out').innerHTML = `Sum of Numbers ${sum}`;
    document.getElementById('out1').innerHTML = `Average of Numbwes ${sum / arr.length}`;
}