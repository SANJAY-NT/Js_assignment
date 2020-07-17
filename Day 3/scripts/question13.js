function oddeven()
{
let num = Number(prompt("Enter a number"));
if(num%2==0)
{
    let i = ":even";
console.log("The number entered is"+num+"and Number is "+i+".");
}
else{
    let i = "odd";
    console.log("The number entered is " +num+" and Number is "+i+".");
} 
}

oddeven();
