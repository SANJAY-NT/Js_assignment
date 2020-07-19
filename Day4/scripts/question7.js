

let n = Number(prompt("Enter the upper limit ."));

console.log(`Prime numbers between 2 and ${n} are:`);
for(i=1; i<=n; i++){
    fact=0;
    for(j=1; j<=n; j++){
        if(i%j==0)
        fact++;
    }
    if(fact==2)
        console.log(i);
}