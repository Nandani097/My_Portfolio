// ==== Theme Toggle, Typed Animation, Vanta Background & Slide Menu ====

window.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    let vantaEffect;


// === Slide Menu ===
    const menuToggle = document.getElementById("menuToggle");
    const slideMenu = document.getElementById("slideMenu");
  
    if (menuToggle && slideMenu) {
      menuToggle.addEventListener("click", () => {
        slideMenu.classList.toggle("show-menu");
      });
    }
  
    // Ensure menu toggle icon is visible on small screens
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    function checkScreenSize(e) {
      if (e.matches) {
        menuToggle.style.display = "block";
      } else {
        menuToggle.style.display = "none";
        slideMenu.classList.remove("show-menu");
      }
    }
    mediaQuery.addListener(checkScreenSize);
    checkScreenSize(mediaQuery);
  
    // === Theme handler ===
    const setTheme = (theme) => {
      if (theme === "light") {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
      }
      updateThemeColors(theme);
      initVanta();
    };
  
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const currentTheme = body.classList.contains("light-mode") ? "dark" : "light";
        setTheme(currentTheme);
      });
    }
  
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
  
    // === Typed.js ===
    if (document.querySelector("#typed-skill")) {
      new Typed("#typed-skill", {
        strings: [
          "HTML", "CSS", "JavaScript", "Node.js", "Database",
          "Python", "DSA", "Java", "SQL"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });
    }
  
    // === Vanta Background ===
    
    function initVanta() {
      if (vantaEffect) vantaEffect.destroy();
      const vantaContainer = document.getElementById("vanta-bg");
      if (!vantaContainer) return;
    
      vantaEffect = VANTA.NET({
        el: vantaContainer,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xa389f4,
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-bg').trim() || 0x0a0a23,
      });
    }
    
    window.addEventListener("DOMContentLoaded", initVanta);
    window.addEventListener("resize", initVanta);
    
    // === Theme-based CSS variable updates ===
    function updateThemeColors(theme) {
      document.documentElement.style.setProperty(
        '--primary-bg', theme === "light" ? '#ffffff' : '#0a0a23'
      );
      document.documentElement.style.setProperty(
        '--secondary-bg', theme === "light" ? '#f4f4ff' : '#121233'
      );
      document.documentElement.style.setProperty(
        '--text-color', theme === "light" ? '#222222' : '#ffffff'
      );
      document.documentElement.style.setProperty(
        '--primary-color', theme === "light" ? '#7f5af0' : '#a389f4'
      );
      document.documentElement.style.setProperty(
        '--hover-color', theme === "light" ? '#bdb4fc' : '#cbb1fc'
      );
      document.documentElement.style.setProperty(
        '--accent-color', theme === "light" ? '#e6c4a8' : '#d4af7f'
      );
    }
  });

  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const moreText = btn.previousElementSibling;
      if (moreText.style.display === 'inline') {
        moreText.style.display = 'none';
        btn.textContent = 'Read more';
      } else {
        moreText.style.display = 'inline';
        btn.textContent = 'Read less';
      }
    });
  });
  
  
  (function () {
    emailjs.init("4ZxqvyNvQ7tMb8koj");
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("service_urvc4tv", "template_lnyh4hp", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        console.error("FAILED...", error);
        alert("Failed to send message.");
      });
  });
  
  