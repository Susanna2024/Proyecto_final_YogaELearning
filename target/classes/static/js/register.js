document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los datos del formulario de registro
        const formData = new FormData(registerForm);
        const registerData = {
            correo: formData.get('correo'),
            contrasena: formData.get('contrasena'),
            abonoTipo: formData.get('abonoTipo'),
            nombre: formData.get('nombre'),
            apellido: formData.get('apellido'),
            abonoCarta: formData.get('abonoCarta'),
            abonoCvv: formData.get('abonoCvv')
        };
        console.log(registerData);
        // Enviar los datos al servidor para el registro
        fetch('/usuarios/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })
        .then(response => {
            if (response.ok) {
                // Si la respuesta es exitosa, mostrar un mensaje y redirigir al usuario a la página de inicio de sesión
                alert('Registro exitoso. Ahora puedes iniciar sesión.');
                window.location.href = '/login.html';
            } else {
                // Si hay un error en la respuesta, mostrar el mensaje de error devuelto por el servidor
                return response.text().then(text => { throw new Error(text); });
            }
        })
        .catch(error => {
            // Capturar y mostrar cualquier error que ocurra durante la solicitud
            alert('Registro fallido: ' + error.message);
        });
    });
});





