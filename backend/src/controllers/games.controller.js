const {resetPosByName} = require('../models/BoatManager');
const {resetTreasures, getIsland} = require('../models/TileManager');

const start = async (req, res) => {
    try {
        let [island] = await getIsland();
        let target = island[Math.floor(Math.random() * ((island.length-1) - 0) + 0)]; // 0 et 10

        await resetPosByName('Black Pearl');
        await resetTreasures(target.id);

        return res.status(201).send();
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};

module.exports = {
    start
};