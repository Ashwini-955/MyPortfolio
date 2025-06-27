// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Close nav on mobile after click
    document.querySelector('.nav-links').classList.remove('show');
  });
});

// Toggle navbar on small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form submission (connect to backend)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type=\"text\"]').value;
  const email = this.querySelector('input[type=\"email\"]').value;
  const message = this.querySelector('textarea').value;

  const data = { name, email, message };

  fetch('http://localhost:8080/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (res.ok) {
        alert('Message sent successfully!');
        this.reset();
      } else {
        alert('Something went wrong. Please try again later.');
      }
    })
    .catch(err => {
      console.error('Error:', err);
      alert('Failed to send message.');
    });
});
