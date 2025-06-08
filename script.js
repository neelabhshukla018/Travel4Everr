document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll + nav highlighting
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionID = this.textContent.trim().toLowerCase();

      navLinks.forEach((lnk) => lnk.classList.remove("active"));
      this.classList.add("active");

      let targetSection = null;

      switch (sectionID) {
        case "home":
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        case "hotels":
          targetSection = document.getElementById("hotels");
          break;
        case "destinations":
          targetSection = document.getElementById("destinations");
          break;
        case "adventure":
          targetSection = document.getElementById("activites");
          break;
        case "booking":
          targetSection = document.getElementById("contact");
          break;
        default:
          return;
      }

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });



// login
  // Get DOM elements
        const loginBtn = document.getElementById('loginBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const closeBtn = document.getElementById('closeBtn');
        const loginForm = document.getElementById('loginForm');

        // Show modal when login button is clicked
        loginBtn.addEventListener('click', () => {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Hide modal when close button is clicked
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });

        // Hide modal when clicking outside of it
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Hide modal when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Handle form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically send the data to your server
            console.log('Login attempt:', { email, password });
            
            // For demo purposes, show an alert
            alert(`Login attempt for: ${email}`);
            
            // Close modal after submission
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Reset form
            loginForm.reset();
        });

        // Add smooth animation when page loads
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
        });

  
  // 🎨 Colorful Snow
  const snowContainer = document.createElement("div");
  snowContainer.classList.add("snow-container");
  document.body.appendChild(snowContainer);

  const colors = ["#FF007F", "#FFD700", "#00FFFF", "#00FF00", "#FF4500", "#1E90FF", "#FF69B4", "#9400D3"];

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❅❆";

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.fontSize = 10 + Math.random() * 20 + "px";
    snowflake.style.opacity = Math.random();
    snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
    snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 10000);
  }

  setInterval(createSnowflake, 200);
});

