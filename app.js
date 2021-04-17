window.onload = (event) =>  {
    document.normalize();
    let title = document.querySelector("#title");
    title.focus();
};


var index = 0;
var timeStamps = [];

function createTime(hours, minutes, seconds) {
    return `${hours}:${minutes}:${seconds}`;
}

function createStampObject(time, title, id) {
    return {
        id: id,
        title: title,
        time: time
    }
}

function validateTime(time, index) {
    return index == 0  ? true : (time > this.timeStamps[(index - 1)]["time"] ? true : false )
}


function updateTimestamp(index) {
    let ul = document.querySelector("#timestamps");
        let li = document.createElement("li");
        li.innerHTML = ` ${this.timeStamps[index].time} - ${this.timeStamps[index].title}`
        ul.appendChild(li);
}

function addTimestamp() {
    let title = document.querySelector("#title");
    let hours = document.querySelector("#hour");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");


    const timeValue = createTime(hours.value, minutes.value, seconds.value);
    const validTime = validateTime(timeValue, index);
    if(validTime !== true) {
        window.alert('Increment the Time');
        hours.focus();
        return;
    }
    const titleValue = title.value;
    const timeStamp = createStampObject(timeValue, titleValue, index);

    this.timeStamps.push(timeStamp);
    console.log(this.timeStamps);
    updateTimestamp(this.index);
    title.value = '';
    title.focus();
    this.index++;
}
