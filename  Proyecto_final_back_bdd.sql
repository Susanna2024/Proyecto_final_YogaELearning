CREATE DATABASE Proyecto_final_back;
USE Proyecto_final_back;




CREATE TABLE Abono (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    tipo VARCHAR(255) NOT NULL,
    estado BOOLEAN,
    fecha_inicio DATE,
    fecha_fin DATE,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE Curso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT
);

CREATE TABLE Leccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    videoURL VARCHAR(255),
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES Curso(id)
);

CREATE TABLE FAQ (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pregunta TEXT NOT NULL,
    respuesta TEXT NOT NULL
);

CREATE TABLE Modulo_Contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    mensaje TEXT NOT NULL
);

INSERT INTO Modulo_Contacto (nombre, correo, mensaje)
VALUES ('Joel', 'joel@mail.com', 'Hola, tengo una pregunta sobre los servicios.');


CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(255) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    abono_tipo VARCHAR(20),
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    abono_carta VARCHAR(20)NOT NULL,
    abono_cvv INT NOT NULL
);

INSERT INTO Usuario (correo, contrasena, abono_tipo, nombre, apellido, abono_carta, abono_cvv)
VALUES ('esempio@email.com', 'password123', 'Base', 'Mario', 'Rossi', 1234567890123456, 123);




SELECT * FROM Modulo_Contacto;

