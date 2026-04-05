
// 🛞 Wheel rotation on scroll
const wheels = document.querySelectorAll(".wheel");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  wheels.forEach(w => {
    w.style.transform = `rotate(${scroll}deg)`;
  });
});

// 🌀 Cursor tracking (3D tilt effect)
const cars = document.querySelectorAll(".car-img img");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 30;
  let y = (window.innerHeight / 2 - e.pageY) / 30;

  cars.forEach(car => {
    car.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
});

// 📩 Direct email (NO third-party)
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let subject = "Test Drive Booking";
  let body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}`;

  window.location.href = `mailto:avagankrushna279@gmail.com?subject=${subject}&body=${body}`;
});
