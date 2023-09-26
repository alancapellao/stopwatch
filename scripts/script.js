var hh = 0, mm = 0, ss = 0, mi = 0, i = 0;
var cron;
const temp = document.getElementById('temp');

document.querySelector('.btn').addEventListener('click', function click(e) {
    i++;
});

function start() {
    if (i == 0) {
        cron = setInterval(() => { timer(); }, 10);
    }
}

function stop() {
    clearInterval(cron);
    i = 0;
}

function reset() {
    clearInterval(cron);
    temp.textContent = '00:00';
    hh = 0, mm = 0, ss = 0, mi = 0, i = 0;
}

function timer() {
    mi++;

    ss += Math.floor(mi / 100);
    mi %= 100;

    mm += Math.floor(ss / 60);
    ss %= 60;

    hh += Math.floor(mm / 60);
    mm %= 60;

    function formatNumber(num) {
        return num < 10 ? '0' + num : num.toString();
    }

    var parts = [];
    if (hh > 0) parts.push(formatNumber(hh));
    if (mm > 0 || hh > 0) parts.push(formatNumber(mm));
    parts.push(formatNumber(ss));
    parts.push(formatNumber(mi));

    var format = parts.join(':');
    temp.textContent = format;
}
