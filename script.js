
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");

menuToggle.addEventListener("click", function () {
    navbarLinks.classList.toggle("show");

    if (navbarLinks.classList.contains("show")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation");
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});



const orders = document.querySelectorAll(".odr-btn");

orders.forEach((order) => {
    order.addEventListener("click", () => {
        const foodCard = order.closest(".foods-card");
        const orderResponse = foodCard.querySelector(".odr-dt");

        orderResponse.textContent =
            "Sorry, order cannot be submitted. Contact developer Aston Amolo if you want a platform like this for your business. Thank you 😊. Click here to clear🔄️.";

        window.alert("Contact Aston Amolo for more information");

        orderResponse.addEventListener("click", () => {
            orderResponse.textContent = "";
        }, { once: true });
    });
});

