let count = 0;
let counter = document.getElementById("count-el")
function incrementer() {
  count += 1;
  counter.innerText = count
}
function reset() {
    count = 0
    console.log("clicked!")
    counter.innerText = count
}

function save() {
    console.log(count)
}