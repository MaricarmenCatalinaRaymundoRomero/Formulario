document.getElementById('contactForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var dni = document.getElementById('dni').value;
  
    if (email === '' || name === '' || dni === '') {
      event.preventDefault();
      alert('Por favor, complete todos los campos.');
    }
  });
  