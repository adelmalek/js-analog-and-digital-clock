let second = document.querySelector("#second");
let minute = document.querySelector("#minute");
let hour = document.querySelector("#hour");

let DSecond = document.querySelector("#d-second");
let DMinute = document.querySelector("#d-minute");
let DHour = document.querySelector("#d-hour");

let TimeOfDay = document.querySelector("#timeofday");

setInterval(() => {
    let day = new Date();

    let hr = day.getHours() * 30;
    let min = day.getMinutes() * 6;
    let sec = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hr+(min/12)}deg)`;
    minute.style.transform = `rotateZ(${min}deg)`;
    second.style.transform = `rotateZ(${sec}deg)`;

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    h = h <= 9? "0" + h : h;
    m = m <= 9? "0" + m : m;
    s = s <= 9? "0" + s : s;

    DHour.innerHTML = h;
    DMinute.innerHTML = m;
    DSecond.innerHTML = s;

    if (h > 12) {
        h = h - 12;
    }

    TimeOfDay.innerHTML = h >= 12? "PM" : "AM";
})

