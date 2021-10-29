const router = require("express").Router();
const path = require('path');

//What routes are needed?
    //Exercise.html
        //GET page
        //POST a new excercise
        //PUT an excercise
        //DELETE an excercise
    //stats.html
        //GET stats

router.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(___dirname, '../public/exercise.html'));
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(___dirname, '../public/stats.html'));
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;

