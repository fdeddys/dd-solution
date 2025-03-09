document.addEventListener("DOMContentLoaded", () => {
    // Load Navbar
    fetch("components/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("navbar").innerHTML = data;
        });

    // Load Footer
    fetch("components/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer").innerHTML = data;
        });

    console.log("Welcome to Dd Solution!");
});

function switchLanguage(lang) {
    const elements = document.querySelectorAll("[data-en]");
    elements.forEach((el) => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });
}
