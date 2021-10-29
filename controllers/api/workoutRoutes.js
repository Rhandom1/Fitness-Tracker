const router = require('express').Router();
const Workout = require('../../models');

//GET excercise and Stats
router.get('/api/workouts', (req,res) => {
    Workout.find({})
    .then((workoutdb) => {
        res.json(workoutdb);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

//POST a new excercise
router.post('/api/workouts', (req, res) => {
    //creating a new workout
        //({}) allows for multiple workouts to be created as an object
    Workout.create({})
    .then((workoutdb) => {
        //Sending to the front end
        res.json(workoutdb)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});
//PUT an excercise (update)
    //exercise exists inside a workout so update workout
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate({
        _id: req.params.id
    },
    {
        $push: {
            excercise: req.body
        }
    }
    ) .then((workoutdb) => {
        res.json(workoutdb)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

//DELETE an excercise
router.delete('/api/workout/:id', (req, res) => {
    Workout.findByIdAndDelete({
        _id: req.params.id
    },
    {
        remove: {
            excercise: req.body
        }
    }
    ).then((workoutdb) => {
        res.json(workoutdb)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});



