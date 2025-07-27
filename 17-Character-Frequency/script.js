function charFrequency(){
    let input$ = prompt("Enter some text");

    if(!input$){
        document.getElementById('out').innerHTML = "plese enter valid input";
        return;
    }

    let str = input$.split("");

    let arr = new Map();
   for (let ch of str)
   {
        if (arr.has(ch)){
            arr.set(ch, arr.get(ch) + 1);
        }else{
            arr.set(ch, 1)
        }
   }
   const output = [...arr.entries()]
        .map(([char, count]) => `${char} = ${count}`)
        .join("<br>");

   document.getElementById('out').innerHTML = output;
}