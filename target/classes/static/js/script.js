document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo: email, contrasena: password })
    })
    .then(response => response.text())
    .then(data => {
        if (data === "Login exitoso") {
            window.location.href = "/protected.html";
        } else {
            alert(data);
        }
    })
    .catch(error => console.error('Error:', error));
});


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('emailRegistro').value;
    const password = document.getElementById('passwordRegistro').value;

    fetch('/usuarios/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo: email, contrasena: password })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});

