window.onload = (event) =>  {
    let title = document.querySelector("#title");
    title.focus();
};


var index = 0;
var lastDate = [];
var timeStamps = [];

let title = document.querySelector("#title");
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");


function timeCodeObject() {
    let date = new Date();

    date.setHours(hours.value);
    date.setMinutes(minutes.value);
    date.setSeconds(seconds.value);
    
    return {title: title.value, date: date}
}

function createTimeString(date) {
    const timeArray = [date.getHours(), date.getMinutes(), date.getSeconds()];
    let time = "";
    timeArray.forEach((e) => {
        e = String(e);
        if (e.length == 1) {
            time = time.concat(("0" + e + ":"));
        } else {
            time = time.concat(e + ":");
        }
    })
    return time.slice(0 , -1);
    // return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function renderTimeCode(o) {
    let ul = document.querySelector("#timestamps");
    let li = document.createElement("li");
    li.innerHTML = `${createTimeString(o.date)} - ${o.title}`;
    ul.appendChild(li);
    timeStamps.push(o);
    lastDate = [hours.value, minutes.value, seconds.value];
}

function addTimestamp() {
    const o = timeCodeObject();
    if (index == 0) {
        renderTimeCode(o);
        return;
    } 
    console.log(index);
    console.log(this.timeStamps)
    console.log(o.date , "   ", timeStamps[index - 1]["date"])
    if (){
        renderTimeCode(o);
    } else {
        window.alert("Incremenet the time")
        hours.focus();
    }

    title.value = '';
    title.focus();
}
