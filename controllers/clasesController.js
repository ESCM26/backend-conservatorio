const db = require('../db');

exports.getClases = async (req, res) => {
  const result = await db.query('SELECT * FROM clases');
  res.json(result.rows);
};

exports.createClase = async (req, res) => {
  const { asignatura_id, profesor_id, curso, dia_semana, hora_inicio, hora_fin, aula } = req.body;

  const result = await db.query(
    `INSERT INTO clases 
     (asignatura_id, profesor_id, curso, dia_semana, hora_inicio, hora_fin, aula)
     VALUES ($1,$2,$3,$4,$5,$6,$7)
     RETURNING *`,
    [asignatura_id, profesor_id, curso, dia_semana, hora_inicio, hora_fin, aula]
  );

  res.json(result.rows[0]);
};