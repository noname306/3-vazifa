let vaqt = document.querySelector("#hours")
let daqiqa = document.querySelector("#minutes")
let soniya = document.querySelector("#seconds")

console.log(vaqt,daqiqa,soniya);

function soat () {
    let now = new Date();
    let vremya = String(now.getHours()).padStart(2, '0');
    let min = String(now.getMinutes()).padStart(2, '0');
    let secund = String(now.getSeconds()).padStart(2, '0');
    vaqt.textContent = vremya;
    daqiqa.textContent = min;
    soniya.textContent = secund;
}

setInterval(soat, 1000);

soat()