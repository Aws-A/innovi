function hoverIn () {
	 document.getElementById('heroLine').src = "images/heroLineOrange.png";
}

function hoverOut () {
	 document.getElementById('heroLine').src = "images/heroLine.png";
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // run once per section
      }
    });
  },
  { threshold: 0.3 }
);

// Observe EACH SECTION
document.querySelectorAll(".observe-section").forEach(section => {
  observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const statusMsg = document.getElementById("status");
  const sendBtn = document.getElementById("send");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendBtn.disabled = true;
    sendBtn.innerText = "Sending...";

    emailjs.sendForm("service_stt1jrd", "template_jofufou", this)
      .then(() => {
        statusMsg.style.color = "green";
        statusMsg.innerText = "Message sent successfully!";
        contactForm.reset();
      }, (err) => {
        statusMsg.style.color = "red";
        statusMsg.innerText = "Oops! Something went wrong: " + JSON.stringify(err);
      })
      .finally(() => {
        setTimeout(() => {
          sendBtn.disabled = false;
          sendBtn.innerText = "Send Message";
          statusMsg.innerText = "";
        }, 3000);
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu");
  const navMenu = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
