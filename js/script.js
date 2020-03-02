// Countdown Timer
var deadline = new Date("2020-05-18").getTime();
var x = setInterval(function() {
    // datum & tijd van vandaag
    var vandaag = new Date().getTime();
    // verschil tussen deadline & vandaag
    var verschil = deadline - vandaag;
    // berekening: dagen, uren, minute, seconden
    var dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
    var uren = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuten = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
    var seconden = Math.floor((verschil % (1000 * 60)) / 1000);
    // display de countdown
    var result = "";
    result += "<p>" + dagen + "</p><p class='after'>dagen</p><br>";
    result += "<p>" + uren + "</p><p class='after'>uren</p><br>";
    result += "<p>" + minuten + "</p><p class='after'>minuten</p><br>";
    result += "<p>" + seconden + "</p><p class='after'>seconden</p>";
    document.getElementById('countdown').innerHTML = result;
}, 1000);
