
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');

// Step 1: Show screen1
screen1.classList.add('active');

// Step 2: After 4s, hide screen1, show screen2
setTimeout(() => {
  screen1.classList.remove('active');
  screen2.classList.add('active');
}, 3000);

// Step 3: After another 5s, show final screen
setTimeout(() => {
  screen2.classList.remove('active');
  screen3.classList.add('active');
}, 8000);

function toggleMore() {
  const moreText = document.getElementById("moreText");
  const toggleBtn = document.getElementById("toggleBtn");

  if (moreText.style.display === "none" || !moreText.style.display) {
    moreText.style.display = "block";
    toggleBtn.classList.add("active");
    toggleBtn.textContent = "See Less";
  } else {
    moreText.style.display = "none";
    toggleBtn.classList.remove("active");
    toggleBtn.textContent = "See More";
  }
}
function slideLeft(id) {
  const slider = document.getElementById(id);
  slider.scrollBy({ left: -312, behavior: 'smooth' });
}

function slideRight(id) {
  const slider = document.getElementById(id);
  slider.scrollBy({ left: 312, behavior: 'smooth' });
}



(function () {
  emailjs.init("SVzN3PoEyV_3KNQ4g"); 
})();

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm("maliha_archi", "maliha_archi", this)
    .then(function () {
      document.getElementById("form-status").innerText = "✅ Message sent successfully!";
      document.getElementById('contact-form').reset();
    }, function (error) {
      document.getElementById("form-status").innerText = "❌ Failed to send message. Please try again.";
      console.error("EmailJS Error:", error);
    });
});
