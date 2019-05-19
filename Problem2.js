var i=1;
var sum = 2;
var even_sum=sum;
while(sum<=4000000){
    let temp = sum;
    sum=sum+i;
    i = temp;
    // console.log("sum "+sum+" i "+i);
    if(sum%2===0){
        even_sum=even_sum+sum;
    }
}

console.log(even_sum);