document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        const formData = new FormData(loginForm);
        const loginData = {
            correo: formData.get('correo'), // Corrige el nombre del campo para el correo electrónico
            contrasena: formData.get('contrasena') // Corrige el nombre del campo para la contraseña
        };
        console.log(loginData);

        fetch('/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => {
            if (response.ok) {
                alert('¡Inicio de sesión exitoso! Serás redirigido a la página protegida de usuarios.');
                window.location.href = 'protected/protected.html';
            } else {
                return response.text().then(text => { throw new Error(text); });
            }
        })
        .catch(error => {
            alert('Inicio de sesión fallido: ' + error.message);
        });
    });
});


