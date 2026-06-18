function solapan(a, b) {
  return (
    a.hora_inicio < b.hora_fin &&
    b.hora_inicio < a.hora_fin &&
    a.dia_semana === b.dia_semana
  );
}

module.exports = { solapan };