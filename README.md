# Proyecto_final_YogaELearning

Este proyecto constituye el backend y frontend de una aplicación para la gestión de usuarios, desarrollado con Spring Boot y Spring Security.

Instrucciones Preliminares para el Despliegue
Clonar el Repositorio
Clona el repositorio del proyecto desde GitHub a tu máquina local utilizando el siguiente comando:

bash
Copy code
git clone <URL_del_repositorio>
Configuración del Backend
Configuración del Entorno de Desarrollo

Asegúrate de tener instalados Java y el framework Spring en tu entorno de desarrollo.
Abre el proyecto en tu IDE preferido (por ejemplo, NetBeans).
Configuración de la Base de Datos MySQL

Asegúrate de tener MySQL instalado y funcionando en tu máquina.

Crea una nueva base de datos MySQL llamada proyecto_final_db (o el nombre que prefieras).

Actualiza el archivo application.properties en src/main/resources con las credenciales de tu base de datos:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/proyecto_final_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
Ejecución del Servidor Spring Boot

Desde tu IDE (por ejemplo, NetBeans), ejecuta el servidor Spring Boot para iniciar el backend.
Configuración del Frontend
Configuración de la Interfaz de Usuario

Navega al directorio del frontend de tu aplicación.
Asegúrate de que todos los archivos HTML, CSS y JavaScript necesarios estén correctamente integrados, preferiblemente utilizando Bootstrap u otro framework CSS.
Verificación del Frontend

Abre el archivo principal HTML en un navegador web para asegurarte de que la interfaz de usuario se visualiza correctamente.
Integración del Backend y Frontend
Verifica que tanto el frontend como el backend están en funcionamiento y pueden comunicarse entre sí correctamente.
Configuraciones Necesarias
Configuración Adicional de la Base de Datos:

Verifica que MySQL esté correctamente configurado y ejecutándose en el puerto especificado.
Configuración del Servidor de Aplicaciones:

Asegúrate de que el puerto del servidor esté configurado adecuadamente en el archivo application.properties para evitar conflictos con otros servicios.
Variables de Entorno:

Configura cualquier variable de entorno necesaria para la conexión a la base de datos u otros servicios externos según sea necesario.




#Manual del Usuario Instrucciones detalladas para el uso de la aplicación:
1. Navegación básica:
o Inicio: La página principal del sitio web proporciona una visión general de los servicios
ofrecidos y acceso a las secciones principales.
o Yoga en línea: Aquí puedes encontrar videos de yoga que puedes reproducir
directamente en la plataforma, siempre y cuando estés registrado y logueado.
o Abonos: Información sobre los diferentes planes de suscripción disponibles y cómo
suscribirse.
o Sobre Mí: Información sobre Sara Bonali y su trayectoria en el yoga.
o FAQ: Respuestas a las preguntas frecuentes de los usuarios y acceso al formulario de
contacto.
2. Registro e inicio de sesión:
o Para acceder a los videos y otros contenidos exclusivos, primero debes crear una cuenta haciendo clic en el enlace de registro en la página de inicio de sesión.
o Completa el formulario de registro proporcionando tu correo electrónico, creando una contraseña, eligiendo un abono y procediendo con el pago.
o Una vez registrado y abonado, serás redirigido automáticamente a la página de videos. o Si no estás logueado, al intentar acceder a un video o a la sección de Yoga en línea, se
abrirá la página de inicio de sesión para que puedas completar el proceso y ser redirigido
a la página de videos. 3. Visualización de videos:
o Después de iniciar sesión y suscribirte, serás redirigido a la página de videos.
o Selecciona el video que deseas ver y haz clic en él para reproducirlo. 4. Suscripción a planes:
o En la sección de Abonos, revisa los diferentes planes de suscripción disponibles.
o Selecciona el plan que mejor se ajuste a tus necesidades y sigue las instrucciones para
completar el proceso de suscripción.


Solución de problemas comunes(FAQ):
1. No puedo iniciar sesión:
o Asegúrate de que estás ingresando la dirección de correo electrónico y la contraseña
correctas.
o La funcionalidad de recuperación de contraseña estará disponible en futuras
actualizaciones.
2. No puedo ver los videos:
o Verifica que estás conectado a internet.
o Asegúrate de haber iniciado sesión en tu cuenta.
o Confirma que has completado el proceso de suscripción y pago del abono.
o Si el problema persiste, intenta limpiar la caché del navegador o utilizar un navegador
diferente.
3. Problemas con la suscripción:
o Revisa que la información de pago proporcionada sea correcta.
o Si hay algún problema con la suscripción, puedes contactar al soporte técnico a través
del formulario de contacto o enviar un correo electrónico a info@sarabonaliyoga.com.
Contacto para ayuda:
• Puedes enviar un correo electrónico a info@sarabonaliyoga.com para recibir ayuda.
• También puedes completar el formulario de contacto en la sección de Preguntas Frecuentes
(FAQ) del sitio web.
