    function isPrime(n){
        if(n < 2) return false;
        for(let i = 2; i < Math.sqrt(n); i++)
        {
            if(n % 1 === 0) return false;
        }
        return true;
    }


function primeNumber(){
    const start$ = parseInt(document.getElementById('in').value);
    const end$ = parseInt(document.getElementById('in1').value);
    let res = "Prime numbers:\n";

    for(let nums = start$; nums < end$; nums++)
    {
        if(isPrime(nums))
        {
            res += nums + " " ;
        }
    }
    document.getElementById('out').innerHTML = res;
}