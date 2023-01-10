const db = require("../datasource");

const table = "boat";

const find = (id) => {
  return db.query(`select * from  ${table} where id = ?`, [id]);
};

const findAll = () => {
  return db.query(`select * from  ${table}`);
};

const findByName = (n) => {
  return db.query(`
    SELECT boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.has_treasure
    FROM ${table}
    JOIN tile ON boat.coord_x=tile.coord_x AND boat.coord_y=tile.coord_y
    WHERE name = ?`, [n]);
};

const updatePos = (id, x, y) => {
  return db.query(`UPDATE ${table} SET coord_x=?, coord_y=? WHERE id=?`, [
    x, y, id
  ]);
};

const resetPosByName = (name) => {
  return db.query(`UPDATE ${table} SET coord_x=1, coord_y=1 WHERE name=?`, [name]);
};

const deleteOne = (id) => {
  return db.query(`delete from ${table} where id = ?`, [id]);
};


module.exports = {
  find,
  findAll,
  deleteOne,
  findByName,
  updatePos,
  resetPosByName
};
