let minutesinputel = document.getElementById("minutesInput");
let hoursinputel = document.getElementById("hoursInput");
let convertbtnel = document.getElementById("convertBtn");

let resultsel = document.getElementById("timeInSeconds");
let errormsgel = document.getElementById("errorMsg");
let errorminmsg = "Please enter a valid number of minutes";
let errorhourmsg = "Please enter a valid number of hours";


let timeinseconds = document.getElementById("timeInSeconds");
convertbtnel.addEventListener("click", function modify() {
    let hoursval = hoursinputel.value;
    let minutesval = minutesinputel.value;
    if (hoursval === "" || hoursval < 0) {
        errormsgel.textContent = errorhourmsg;
    } else if (minutesval === "" || minutesval < 0) {
        errormsgel.textContent = errorminmsg;
    } else {
        let result = parseInt(hoursval) * 3600 + parseInt(minutesval) * 60;
        timeinseconds.textContent = result + "s";
        timeinseconds.classList.add("outlinestyle");
    }
});