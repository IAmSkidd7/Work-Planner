//added ids for the variable array
var timeSlots = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var events = {};

// set my local storage pararmeters
timeSlots.forEach(element => {
    if (localStorage.getItem(element) === null) {
        localStorage.setItem(element, '');
    }
    events[element] = localStorage.getItem(element);
});
//checks for the current time and tells what color to make the make row depending on time
Object.entries(events).forEach(([key, value]) => { 

    document.getElementById(key).value = value
    var currentTime = moment().hour();
    var timeSlot = moment(key.slice(0, -2), 'hh').hour();
    if (key.charAt(key.length-2) === 'p' && key != '12pm' ){
        timeSlot += 12;
    }

    console.log('timeSlot', timeSlot)
    console.log('currentTime', currentTime)

    console.log(currentTime, timeSlot, moment(key.slice(0, -2), 'hh'))

    if(timeSlot > 12) {

    }

    if (currentTime > timeSlot) {
        setColorElement(key, 'past')

    } else if (currentTime === timeSlot) {
        setColorElement(key, 'present')

    } else {
        setColorElement(key, 'future')
    }
});

//function to make the code run
function addEventToTime(timeSlot, event) {
    events[timeSlot] = event
    saveData();
}

function onBtnClick(timeSlot) {
    var event = document.getElementById(timeSlot).value
    addEventToTime(timeSlot, event)
}

function saveData() {
    Object.entries(events).forEach(([key, value]) => {
        localStorage.setItem(key, value);
    });
};

function setColorElement(timeSlot, color) {
    document.getElementById(timeSlot).classList.add(color)
}