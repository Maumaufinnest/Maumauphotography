// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// Prevent selecting a date in the past.
const dateInput = document.getElementById("sessionDate");
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  dateInput.min = localToday;
}

// Static-site booking: compose a WhatsApp message.
// This does not save bookings automatically; the visitor must press Send in WhatsApp.
const bookingForm = document.getElementById("bookingForm");
const formStatus = document.getElementById("formStatus");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!bookingForm.reportValidity()) return;

    const name = document.getElementById("clientName").value.trim();
    const phone = document.getElementById("clientPhone").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const service = document.getElementById("serviceType").value;
    const date = document.getElementById("sessionDate").value;
    const time = document.getElementById("sessionTime").value;
    const message = document.getElementById("clientMessage").value.trim();

    const bookingMessage = [
      "Hello Maumau Photography Studio, I would like to request a photography session.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Service: ${service}`,
      `Preferred date: ${date}`,
      `Preferred time: ${time}`,
      message ? `Project details: ${message}` : null,
      "",
      "Please let me know your availability. Thank you."
    ].filter(Boolean).join("\n");

    const whatsappNumber = "254706398452";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`;

    if (formStatus) {
      formStatus.textContent = "Opening WhatsApp with your booking request…";
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

// Current year in footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
