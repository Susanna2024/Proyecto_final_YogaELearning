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
