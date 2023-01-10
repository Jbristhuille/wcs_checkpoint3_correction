const {findAll} = require('../models/TileManager');

const getAll = async (req, res) => {
    try {
        let [result] = await findAll();
        return res.status(200).send(result);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
}

module.exports = {
    getAll
};