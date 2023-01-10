const db = require("../datasource");

const table = "tile";

const find = (id) => {
  return db.query(`select * from  ${table} where id = ?`, [id]);
};

const findAll = () => {
  return db.query(`select * from  ${table}`);
};

const findByCoord = (x, y) => {
  return db.query(`SELECT * FROM ${table} WHERE coord_x=? AND coord_y=?`, [
    x, y
  ]);
}

const getIsland = () => {
  return db.query(`SELECT * FROM ${table} WHERE type='island'`);
}

const resetTreasures = (id) => {
  return db.query(`
    UPDATE ${table} SET has_treasure=false;
    UPDATE ${table} SET has_treasure=true WHERE id=?;`, [id]);
};

const deleteOne = (id) => {
  return db.query(`delete from ${table} where id = ?`, [id]);
};

module.exports = {
  find,
  findAll,
  findByCoord,
  deleteOne,
  resetTreasures,
  getIsland
};
