var opponentName = "Someone Tough";
var eventName = "Event Name 2024";
var eventDate = new Date("November 25, 2025 20:00:00");
var eventLocation = "a Very Nice Event Location";
var ticketUrl = "https://mpv.tickets.com/?agency=ERIE_EVENTS_MPV&orgid=37168&eventid=4767";
var ppvUrl = "https://combatsportsnow.com/event/bayfront-brawl-16";
var infoUrl = "https://www.tapology.com/fightcenter/events/117396-bayfront-brawl-16";

// Variables below should not typically need to be updated
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = months[eventDate.getMonth()];
let day = eventDate.getDate();
let dayOfWeek = days[eventDate.getDay()];
let year = eventDate.getFullYear();
let time = eventDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var countDownDate = eventDate.getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    } else {
        // Loop through the elements and show them
        document.getElementsByClassName("nextBout")[0].style.display = "block";
    }
}, 1000);

function ppvOpen(e) {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation(); 
    window.open(ppvUrl, '_blank');
}

function infoOpen(e) {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    window.open(infoUrl, '_blank');
}

function ticketOpen(e) {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    window.open(ticketUrl, '_blank');
}
