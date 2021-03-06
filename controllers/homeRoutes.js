const router = require("express").Router();
const path = require('path');

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.get('/exercise', (req, res) => {
    console.log("You found the excercise page!");
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.get('/stats', (req, res) => {
    console.log("You found the stats page!")
    try {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;

