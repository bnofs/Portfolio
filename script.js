window.onload = function () {
    $('#right-column').load('leadership-menu.html');
    $('#content').load('leadership/best.html');
}

var best = document.getElementById('best');
var envision = document.getElementById('envision');
var pdp = document.getElementById('pdp');
var values = document.getElementById('values');
var box = document.getElementById('box');

var leadership = document.getElementById('leadership');
var other = document.getElementById('other');

best.style.cursor = 'pointer';
envision.style.cursor = 'pointer';
pdp.style.cursor = 'pointer';
values.style.cursor = 'pointer';
box.style.cursor = 'pointer';

leadership.style.cursor = 'pointer';
other.style.cursor = 'pointer';

other.onclick = function () {
    $('#right-column').load('other-menu.html');
    leadership.classList.remove('active');
    other.classList.add('active');
}

leadership.onclick = function () {
    $('#right-column').load('leadership-menu.html');
    leadership.classList.add('active');
    other.classList.remove('active');
}

best.onclick = function () {
    $('#content').load('leadership/best.html');
    best.classList.add('active');
    envision.classList.remove('active');
    pdp.classList.remove('active');
    values.classList.remove('active');
    box.classList.remove('active');
}

envision.onclick = function () {
    $('#content').load('leadership/envision.html');
    best.classList.remove('active');
    envision.classList.add('active');
    pdp.classList.remove('active');
    values.classList.remove('active');
    box.classList.remove('active');
}
pdp.onclick = function () {
    $('#content').load('leadership/pdp-image.html');
    best.classList.remove('active');
    envision.classList.remove('active');
    pdp.classList.add('active');
    values.classList.remove('active');
    box.classList.remove('active');
}
values.onclick = function () {
    $('#content').load('leadership/values.html');
    best.classList.remove('active');
    envision.classList.remove('active');
    pdp.classList.remove('active');
    values.classList.add('active');
    box.classList.remove('active');
}
box.onclick = function () {
    $('#content').load('leadership/meeting-times.html');
    best.classList.remove('active');
    envision.classList.remove('active');
    pdp.classList.remove('active');
    values.classList.remove('active');
    box.classList.add('active');
}