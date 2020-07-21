let arr = [];
let size =6;
for (let i=0; i<size;i++)
{
    arr[i]=prompt('Enter 6 numbers ' +(i+1));
}

console.log(arr);

console.log(`The given six digit is: ${arr}`)

console.log("The filter of odd numbers is :")
let odd = arr.filter((el)=>el%2==1);
console.log(odd);

console.log("let cube of those filtered odd numbers is:")
let cube = odd.forEach((el)=>{
    console.log(el**2); 
})
