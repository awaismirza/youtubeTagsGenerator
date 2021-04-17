window.onload = (event) =>  {
    let title = document.querySelector("#title");
    title.focus();
};


var index = 0;
var lastDate = 0;

let title = document.querySelector("#title");
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");


function createTimeString() {
    const timeArray = [hours.value, minutes.value, seconds.value];
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
}

function renderTimeCode() {
    let ul = document.querySelector("#timestamps");
    let li = document.createElement("li");
    li.innerHTML = `${createTimeString()} - ${title.value}`;
    ul.appendChild(li);
}

function addTimestamp() {
    const currentDate = (hours.value+minutes.value+seconds.value);
    if (index == 0 || parseInt(currentDate) > parseInt(lastDate)){
        renderTimeCode();
        lastDate = currentDate;
        index++
    } else {
        window.alert("Incremenet the time")
        hours.focus();
    }

    title.value = '';
    title.focus();
}
