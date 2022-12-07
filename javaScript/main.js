let icon = document.querySelector("header .container nav .fa-bars");
let menu = document.querySelector("header .container nav ul");
document.body.childNodes.forEach((Element) => {
    Element.addEventListener("click", (ele) => {
        if (ele.target === icon) {
            if (menu.style.display === "none" || menu.style.display === "") {
                menu.style.display = "flex";
            } else {
                menu.style.display = "none"
            };
        } else {
            menu.style.display = "none"
        };
    });
});
