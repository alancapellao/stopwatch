"use strict"

var hh = 0;
var mm = 0;
var ss = 0;
var mi = 0;

var tempo = 10;
var cron;

var button = document.querySelector('.btn');

var i = 0;

button.addEventListener('click', function click(e) {
    i++;
});

function start() {


    if (i == 0) {
        cron = setInterval(() => { timer(); }, tempo);
    }
}

function stop() {

    clearInterval(cron);
    i = 0;
}

function reset() {

    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    mi = 0;
    i = 0;

    document.getElementById('temp').innerHTML = "00:00";
}

function timer() {

    mi++;

    if (mi == 100) {

        mi = 0;
        ss++;

        if (ss == 60) {
            ss = 0;
            mm++;

            if (mm == 60) {
                mm = 0;
                hh++;
            }
        }
    }
    var format = (ss < 10 ? '0' + ss : ss) + ':' + (mi < 10 ? '0' + mi : mi);
    document.getElementById('temp').innerText = format;

    if (mm > 0) {

        format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (mi < 10 ? '0' + mi : mi);
        document.getElementById('temp').innerText = format;

        if (hh > 0) {

            format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (mi < 10 ? '0' + mi : mi);
            document.getElementById('temp').innerText = format;
        }
    }
}
