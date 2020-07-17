let marks = Number(prompt("Enter the marks "));
if(marks>= 90 && marks<100 )
{
    document.write("Marks are " +marks+ " grade is S.");
}
 else if (marks>=80 && marks < 90)
 {
    document.write("Marks are " +marks+ " grade is A.");

 }
 else if (marks>=70 && marks < 80)
 {
    document.write("Marks are " +marks+ " grade is B.");
    
 }
 else if (marks>=60 && marks < 70)
 {
    document.write("Marks are " +marks+ " grade is C.");
 
 }
 else if (marks>=50 && marks < 60)
 {
    document.write("Marks are " +marks+ " grade is D.");
   
 }
 else if (marks>=40 && marks < 50)
 {
    document.write("Marks are " +marks+ " grade is E.");
   
 }
 else if (marks< 40 && marks>=0)
 {
    document.write("Marks are " +marks+ " grade is F.");

 }
 else 
 {
     document.write("Enter numbers between 0 and 100. ")
 }