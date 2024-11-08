var modal = document.getElementById("myModal");

var btn = document.querySelectorAll(".open-modal-fs");

btn.forEach(b => {
    b.addEventListener('click', e => {
        modal.classList.remove("hidden");

        setTimeout(() => {
            modal.classList.remove("opacity-0");
            modal.classList.add("opacity-100");
        }, 10);
    })
})

window.onclick = function(event) {
    if (event.target == modal) {
       
        modal.classList.remove("opacity-100");
        modal.classList.add("opacity-0");
        setTimeout(() => {
            modal.classList.add("hidden");
            }, 300);
    }
}