const {findByCoord} = require('../models/TileManager');

const isExist = async (req, res, next) => {
    try {
        let {coord_x, coord_y} = req.body;
        let [[result]] = await findByCoord(coord_x, coord_y);

        if (result) return next();
        else return res.status(422).send();
    } catch (err) {
        console.log(err);
        return res.status(422).send();
    }
};

module.exports = {
    isExist
}