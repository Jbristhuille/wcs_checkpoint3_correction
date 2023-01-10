const {findAll, findByName, updatePos} = require('../models/BoatManager');

const getAll = async (req, res) => {
    try {
        let result;

        if (req.query.name) {
            result = await findByName(req.query.name);
        } else {
            result = await findAll();
        }

        return res.status(200).send(result[0]);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
}

const move = async (req, res) => {
    try {
        let {coord_x, coord_y} = req.body;

        await updatePos(req.params.id, coord_x, coord_y);
        return res.status(204).send();
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};

module.exports = {
    getAll,
    move
};