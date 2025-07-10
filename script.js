function clock(){
    var currentday=new Date();
    let hours=currentday.getHours();
    let minutes=currentday.getMinutes();
    let secs=currentday.getSeconds();
    //changing am or pm based on time
    let amorpm;
    if(hours>=12){
        amorpm="PM";
    }else{
        amorpm="AM";
    }
    
    //setting 12hour format
    if(hours>12){
        hours=hours%12;
    }if(hours===0){
        hours=12;
    }

    //adding leading zeroes to the single digit
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(secs<10){
        secs="0"+secs;
    }

    document.querySelector('.numberhours').textContent=hours;
    document.querySelector('.numberminutes').textContent=minutes;
    document.querySelector('.numbersecs').textContent=secs;
    document.querySelector('.ampm').textContent=amorpm;

    //day,date month year
    var dayname=currentday.toLocaleString("default",{weekday:'long'});
    var monthname=currentday.toLocaleString("default",{month:'long'});
    var today=currentday.getDate();
    var year=currentday.getFullYear();

    document.querySelector('.day').textContent=dayname;
    document.querySelector('.month').textContent=monthname;
    document.querySelector('.num').textContent=today;
    document.querySelector('.year').textContent=year;

}
setInterval(clock,1000);
clock();