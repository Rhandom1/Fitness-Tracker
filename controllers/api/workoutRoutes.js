const router = require('express').Router();
const Workout = require('../../models');

//What routes are needed?
    //Exercise.html
        //GET excercise and Stats
        
        
        //DELETE an excercise

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

router.delete('/api/workout:id', (req, res) => {
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

