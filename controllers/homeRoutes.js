const router = require("express").Router();
const path = require('path');

//What routes are needed?
    //route for index.html
    //Exercise.html
    //stats.html

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(___dirname, '../public/index.html'));
    }
    catch(err) {
        res.status(500).json(err);
    }
});

