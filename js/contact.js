document.getElementById("contactForm").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !phone || !message) {
      alert("Please fill out all fields.");
      event.preventDefault();
      return;
    }
  
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert("Name must contain only letters and spaces.");
      event.preventDefault();
      return;
    }
  
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      event.preventDefault();
      return;
    }
  
    alert("Form submitted successfully!");
  });
  