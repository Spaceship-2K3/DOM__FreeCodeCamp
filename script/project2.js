const btnOpen = document.querySelector("#open-btn");
const btnClose = document.querySelector("#close-btn");
const modal = document.querySelector(".modal-container ");

btnOpen.addEventListener("click", function () {
    modal.style.display = "block";
});
btnClose.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
