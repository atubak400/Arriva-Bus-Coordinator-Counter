let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function increment(x) {
    count += x
    countEl.textContent = count
}

function save() {
    let countStr = " - " + count;
    saveEl.textContent += countStr;
    total += count;
    totalEl.textContent = "Total: " + total;
    countEl.textContent = 0;
    count = 0;
}


function reset() {
    saveEl.textContent = " "
    countEl.textContent = 0
    totalEl.textContent = " "
    count = 0
    total = 0
}


const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById("current-year");
currentYearElement.textContent = currentYear;

