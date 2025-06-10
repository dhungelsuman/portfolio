
// Get all nav list items in both desktop and hamburger menus
const navItems = document.querySelectorAll('#desktop-nav ul li, #hamburger-nav .menu-links ul li');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all nav items
    navItems.forEach(nav => nav.classList.remove('active'));
    // Add active class to clicked nav item
    item.classList.add('active');
  });
});

function sendEmail(event) {
  event.preventDefault(); 

  const serviceID = 'service_sccggae';
  const mainTemplateID = 'template_m3c036c';
  const autoReplyTemplateID = 'template_7vs6yj9'; 

  const form = document.getElementById('contact-form');

  // Send main email to you
  emailjs.sendForm(serviceID, mainTemplateID, form)
    .then(() => {
      // After success, send auto-reply to user
      emailjs.send(serviceID, autoReplyTemplateID, {
        email: form.email.value,
        name: form.name.value,
        title: 'Thank you for contacting me!',
      })
      .then(() => {
        alert('Message sent successfully! Check your email for confirmation.');
        form.reset();
      }, (error) => {
        console.error('Failed to send auto-reply:', error);
        alert('Message sent but auto-reply failed.');
        form.reset();
      });
    }, (error) => {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    });
}

// Show the sidebar by adding the 'show' class
function showSideBar() {
  document.querySelector('.sidebar').classList.add('show');
}

// Hide the sidebar by removing the 'show' class
function hideSideBar() {
  document.querySelector('.sidebar').classList.remove('show');
}

// Get all nav links in desktop and sidebar menus
const navLinks = document.querySelectorAll('.navbar ul li a[href^="#"]');

// Scroll Spy & Active Link Update
window.addEventListener('scroll', () => {
  let currentSection = '';

  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.parentElement.classList.add('active');
    }
  });
});

// Smooth scroll + hide sidebar on link click
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Hide sidebar when any sidebar link is clicked
    hideSideBar();
  });
});

// Optional: If you want clicking on the close icon to hide sidebar
document.querySelector('.sidebar li:first-child a').addEventListener('click', e => {
  e.preventDefault();
  hideSideBar();
});


function showSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'block';
  sidebar.setAttribute('aria-hidden', 'false');
}

function hideSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
  sidebar.setAttribute('aria-hidden', 'true');
}
