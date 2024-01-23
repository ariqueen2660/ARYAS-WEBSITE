// clock.js
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1; // JavaScript months are 0-indexed
    var year = now.getFullYear();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateString = day + "/" + month + "/" + year;
    
    var greeting = getGreeting(hours);

    document.getElementById("clock").innerText = greeting + " " + timeString + " - " + dateString;

    setTimeout(updateClock, 1000); // Update the clock every second
}

function getGreeting(hour) {
    var greeting = "Merhaba";

    if (hour >= 6 && hour < 12) {
        greeting = "Günaydın!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "İyi günler!";
    } else if (hour >= 18 && hour < 24) {
        greeting = "İyi akşamlar!";
    } else if (hour >= 0 && hour < 6) {
        greeting = "İyi geceler!";
    }

    return greeting;
}

// Call the function to initially set up the clock
updateClock();

