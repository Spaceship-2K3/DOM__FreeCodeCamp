let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        id: 1,
        quote: "Học cái tốt thì khó, ví như người ta leo núi, phải vất vả, khó nhọc mới lên đến đỉnh. Học cái xấu thì dễ, như ở trên đỉnh núi trượt chân một cái là nhào xuống vực sâu",
        person: "Hồ Chí Minh",
    },
    {
        id: 2,
        quote: "Cách tốt nhất để khởi đầu là ngừng nói và bắt đầu làm",
        person: " Walt Disney.",
    },
    {
        id: 3,
        quote: "Người bi quan nhìn ra khó khăn trong mọi cơ hội. Người lạc quan nhìn ra cơ hội trong mọi khó khăn",
        person: "Winston Churchill.",
    },
    {
        id: 4,
        quote: "Đừng để ngày hôm qua chiếm quá nhiều thời gian của ngày hôm nay ",
        person: "Will Rogers.",
    },
    {
        id: 5,
        quote: "Người ta học được từ thất bại nhiều hơn từ thành công. Bởi vậy đừng để thất bại cản đường bạn, bởi thất bại sẽ làm nên con người bạn",
        person: "Khuyết danh",
    },
    {
        id: 6,
        quote: "Vấn đề không phải là bạn có gục ngã hay không. Mà là bạn có đứng dậy sau khi ngã hay không",
        person: "Vince Lombardi.",
    },
];

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    person.innerHTML = quotes[random].person;
    quote.innerHTML = quotes[random].quote;
});
