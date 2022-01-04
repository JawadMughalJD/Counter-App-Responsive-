
let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {

    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function decrement() {

    if (count > 0){
        count = count - 1
        countEl.innerText = count
        console.log(count)
    }
    else{
        console.log(count)
    }
    
}
 
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    count = 0
    countEl.innerText = 0

}




 