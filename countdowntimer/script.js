const dayE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minsE1=document.getElementById('mins');
const secondsE1=document.getElementById('seconds');

const newYears="18 jul 2021";
function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totalSeconds=(newYearsDate-currentDate)/1000;
    const days= Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const mins=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;
    dayE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    minsE1.innerHTML=mins;
    secondsE1.innerHTML=seconds;
}
countdown();
setInterval(countdown,1000);