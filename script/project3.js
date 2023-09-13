const accordion = document.querySelectorAll(".content-container");

accordion.forEach((item) => {
    item.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});
