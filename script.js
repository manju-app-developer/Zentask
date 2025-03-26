document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".cta-btn").addEventListener("click", function () {
        alert("Welcome to ZenTask AI! Sign up to get started.");
    });

    document.querySelectorAll(".plan button").forEach(button => {
        button.addEventListener("click", function () {
            alert("This feature will be available soon!");
        });
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
