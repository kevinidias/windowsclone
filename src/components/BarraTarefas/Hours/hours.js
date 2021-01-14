import React from 'react';


function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();

    if(hour < 10) hour = "0"+hour;
    if(minute < 10) minute = "0"+minute;
    var tempo = hour+":"+minute;

    document.getElementById("timer").innerHTML = tempo;
}

function initTime() {
    setInterval(showTime, 1000)
}



function showDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();

    if(day.toString().length === 1 ) day = '0'+day;
    if(month.toString().length === 1) month = '0'+month;

    var days = day+"/"+month+"/"+year;

    document.getElementById("dates").innerHTML = days;
 
}

function initDate() {
    setInterval(showDate)
}




function hours() {
    return (
        <>
            <div onLoad={initTime()} >
                <div id="timer"></div> 
            </div>

            <div onLoad={initDate()} >
                <div id="dates"></div> 
            </div>

 
        </>

    )
}

export default hours;
