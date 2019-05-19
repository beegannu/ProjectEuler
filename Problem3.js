

var arr=[];

function primeFactors()  
{  
    var n = 600851475143;

    while (n % 2 == 0)  
    {  
        arr.push(2);
        n = n/2;  
    }  
  
    // n must be odd, so only check for i+2
    for (var i = 3; i <= Math.sqrt(n); i = i + 2)  
    {  
        while (n % i == 0)  
        {  
            arr.push(i);
            n = n/i;  
        }  
    }  
   
    if (n > 2)  
        arr.push(n); 

    return arr;
}

console.log(primeFactors());