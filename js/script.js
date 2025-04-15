document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((el) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 300);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const notice = document.querySelector(".notice");
    
    // Add a pulsating effect
    setInterval(() => {
        notice.style.boxShadow = "0px 0px 20px rgba(255, 69, 0, 0.5)";
        setTimeout(() => {
            notice.style.boxShadow = "none";
        }, 500);
    }, 1000);
});
