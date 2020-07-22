const name = prompt("Enter your name");

    document.getElementById("single").innerText += `Welcome ${name}`;
    const ctime = document.getElementById('time');

    function clock()
    {
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
    }
    clock();
    setInterval(clock,1000);

    const darkmode = document.getElementById('dark');
    darkmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
   
}