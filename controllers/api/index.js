const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');


//Prepends any route in the workoutRoutes
router.use('/api', workoutRoutes);


module.exports = router;