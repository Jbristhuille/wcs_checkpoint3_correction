const express = require("express");
const router = express.Router();

// Controllers
const tilesController = require("./controllers/tiles.controller");
const boatsController = require('./controllers/boats.controller');
const gamesController = require('./controllers/games.controller');

// Services
const tileExists = require('./services/tileExists');

// Tiles
router.get('/tiles', tilesController.getAll);

// Boats
router.get('/boats', boatsController.getAll);
router.put('/boats/:id', tileExists.isExist, boatsController.move);

// Games
router.post('/games', gamesController.start);

module.exports = router;
