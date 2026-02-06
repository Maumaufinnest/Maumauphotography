// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

// Booking Button Alert
function bookAlert() {
  alert("Booking system coming soon. Contact: bookings@staticstudio.com");
}
