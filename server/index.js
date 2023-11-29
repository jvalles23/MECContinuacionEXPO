const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mec'
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

app.use(bodyParser.json());

// Ruta para registrar un médico
app.post('/registMed', (req, res) => {
    const { Nombre, Apellido, NumColegiado, Contraseña } = req.body;
    const sql = 'INSERT INTO Medicos (NombreMedico, ApellidoMedico, NumeroColegiado, Contraseña) VALUES (?, ?, ?, ?)';
    db.query(sql, [Nombre, Apellido, NumColegiado, Contraseña], (err, result) => {
        if (err) throw err;
        res.send('Médico registrado exitosamente');
    });
});

// Ruta para registrar un paciente
app.post('/registPac', (req, res) => {
    const { Nombre, Apellido, FechaNacimiento, TarjetaSanitaria, Contraseña } = req.body;
    const sql = 'INSERT INTO Pacientes (NombrePaciente, ApellidoPaciente, FechaNacimiento, TarjetaSanitaria, Contraseña) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [Nombre, Apellido, FechaNacimiento, TarjetaSanitaria, Contraseña], (err, result) => {
        if (err) throw err;
        res.send('Paciente registrado exitosamente');
    });
});

// Ruta para obtener la tabla de consultas con datos específicos
app.get('/consulta', (req, res) => {
    const sql = 'SELECT Medicos.NombreMedico, Pacientes.CentroSalud, Pacientes.FechaCita FROM Consultas INNER JOIN Medicos ON Consultas.MedicoId = Medicos.id INNER JOIN Pacientes ON Consultas.PacienteId = Pacientes.id';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Ruta para obtener información específica de un paciente
app.get('/infoConsulta', (req, res) => {
    const sql = 'SELECT Pacientes.NombrePaciente, Pacientes.ApellidoPaciente, Pacientes.TarjetaSanitaria, Pacientes.FechaCita, Pacientes.MotivoConsulta FROM Pacientes';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Ruta para añadir una consulta
app.post('/addConsulta', async (req, res) => {
    try {
        const { Nombre, Apellido, TarjetaSanitaria, FechaCita, MotivoConsulta, MedicoId } = req.body;

        // Obtener el id del paciente
        const pacienteIdResult = await db.query('SELECT id FROM Pacientes WHERE NombrePaciente = ? AND ApellidoPaciente = ? AND TarjetaSanitaria = ?', [Nombre, Apellido, TarjetaSanitaria]);
        const pacienteId = pacienteIdResult[0].id;

        // Insertar la consulta utilizando los ids obtenidos
        const sql = 'INSERT INTO Consultas (PacienteId, MedicoId) VALUES (?, ?)';
        await db.query(sql, [pacienteId, MedicoId]);

        res.send('Consulta añadida exitosamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al agregar la consulta');
    }
});


// Ruta para editar una consulta
app.put('/editConsulta', (req, res) => {
    const { Nombre, Apellido, FechaCita, MotivoConsulta } = req.body;
    const sql = 'UPDATE Pacientes SET FechaCita = ?, MotivoConsulta = ? WHERE PacienteId IN (SELECT id FROM Pacientes WHERE NombrePaciente = ? AND ApellidoPaciente = ?)';
    db.query(sql, [FechaCita, MotivoConsulta, Nombre, Apellido], (err, result) => {
        if (err) throw err;
        res.send('Consulta editada exitosamente');
    });
});


// Ruta para eliminar una consulta
app.delete('/deleteConsulta', (req, res) => {
    // Aquí debes proporcionar lógica para eliminar una consulta según tus necesidades
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
