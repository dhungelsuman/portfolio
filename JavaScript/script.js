// NAVIGATION ACTIVE ITEM ON CLICK
const navItems = document.querySelectorAll('#desktop-nav ul li, #hamburger-nav .menu-links ul li');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
  });
});

// EMAIL SENDING WITH EMAILJS
function sendEmail(event) {
  event.preventDefault();

  const serviceID = 'service_sccggae';
  const mainTemplateID = 'template_m3c036c';
  const autoReplyTemplateID = 'template_7vs6yj9';

  const form = document.getElementById('contact-form');
  if (!form) return;

  emailjs.sendForm(serviceID, mainTemplateID, form)
    .then(() => {
      return emailjs.send(serviceID, autoReplyTemplateID, {
        email: form.email.value,
        name: form.name.value,
        title: 'Thank you for contacting me!',
      });
    })
    .then(() => {
      alert('Message sent successfully! Check your email for confirmation.');
      form.reset();
    })
    .catch(error => {
      console.error('Email send error:', error);
      alert('Something went wrong. Please try again later.');
      form.reset();
    });
}

// SIDEBAR TOGGLE WITH ACCESSIBILITY SUPPORT
function showSideBar() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  sidebar.classList.add('show');
  sidebar.style.display = 'block';
  sidebar.setAttribute('aria-hidden', 'false');
}

function hideSideBar() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  sidebar.classList.remove('show');
  sidebar.style.display = 'none';
  sidebar.setAttribute('aria-hidden', 'true');
}

// SMOOTH SCROLL + AUTO SIDEBAR HIDE
const navLinks = document.querySelectorAll('.navbar ul li a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    hideSideBar();
  });
});

// SCROLL SPY FUNCTIONALITY
window.addEventListener('scroll', () => {
  let currentSection = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
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

// SIDEBAR CLOSE BUTTON (SAFE CHECK)
const closeSidebarLink = document.querySelector('.sidebar li:first-child a');
if (closeSidebarLink) {
  closeSidebarLink.addEventListener('click', e => {
    e.preventDefault();
    hideSideBar();
  });
}
