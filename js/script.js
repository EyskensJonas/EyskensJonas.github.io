// countdown
var countdownDate = new Date("2020-05-18").getTime();
var countdown = setInterval(function(){
    var today = new Date().getTime();
    var distance = countdownDate - today;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('countdownClock').innerHTML = "<p>" + days + "<span>dagen</span>" + hours + "<span>uren</span>" + minutes + "<span>minuten</span>" + seconds + "<span>seconden</span></p>";
    if(distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdownClock').innerHTML = "EXPIRED";
    }
}, 1000);
