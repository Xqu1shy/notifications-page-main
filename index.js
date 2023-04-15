

// notif update on open

let counterNotif = document.getElementById('counter-notif')
let count = document.querySelectorAll('.active').length;

counterNotif.innerText = count



// remove active

let markAll = document.getElementById('mark-all')
let contentHolder = document.querySelectorAll('.content-holder')

function removeActive() {
    for (let i=0; i < contentHolder.length; i++)
        contentHolder[i].classList.remove('active')
}



// check active after remove

function activeL() {
    let counterNotif = document.getElementById('counter-notif')
    let count = document.querySelectorAll('.active').length;
    
    counterNotif.innerText = count
}






markAll.addEventListener('click', () => {
    removeActive()
    activeL()
})

