document.addEventListener("DOMContentLoaded", function () {
  // Animate input focus
  document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      if (input.value === '') {
        input.parentElement.classList.remove('focused');
      }
    });
  });

  // Handle form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("yourname").value.trim();
    const email = document.getElementById("emailaddress").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmpassword").value.trim();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Show thank you popup
    showThankYouPopup();
  });

  function showThankYouPopup() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = 'rgba(0, 0, 0, 0.9)';
    modal.style.color = '#fff';
    modal.style.padding = '30px 40px';
    modal.style.borderRadius = '10px';
    modal.style.fontSize = '20px';
    modal.style.textAlign = 'center';
    modal.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
    modal.style.zIndex = '9999';
    modal.innerHTML = '🎉 Thank you for registering!';

    document.body.appendChild(modal);

    setTimeout(() => {
      modal.remove();
    }, 3000);
  }
});
