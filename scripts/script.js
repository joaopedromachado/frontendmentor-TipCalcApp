const elements = document.querySelectorAll(".tip-active");

elements.forEach(element => {
    element.addEventListener("click", () => {
        var current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].classList = current[0].classList.replace(" active", "");
        }

        this.classList += " active";
    })
})