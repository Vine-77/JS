let count = 0;
let counter = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function incrementer() {
  count += 1;
  counter.innerText = count
}
function reset() {
    count = 0
    counter.textContent = count
}

function save() {
    let history = count + " - "
    saveEl.textContent += history
    reset()
}