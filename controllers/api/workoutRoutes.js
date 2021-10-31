const router = require("express").Router();
const {Workout} = require("../../models");

console.log(Workout);
//GET excercise and Stats
router.get("/workouts", (req, res) => {
  Workout.find({})
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//POST a new excercise
router.post("/workouts", (req, res) => {
  //creating a new workout
  //({}) allows for multiple workouts to be created as an object
  Workout.create({})
    .then((workoutdb) => {
      //Sending to the front end
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
//PUT an excercise (update)
//exercise exists inside a workout so update workout
router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: {
        excercise: req.body,
      },
    }
  )
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//DELETE an excercise
router.delete("/workouts/:id", (req, res) => {
  Workout.findByIdAndDelete(
    {
      _id: req.params.id,
    },
    {
      remove: {
        excercise: req.body,
      },
    }
  )
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//GET stats?
//What am I returning here?
router.get("/duration", (req, res) => {
    console.log("You hit duration!");
  //all purpose tool for data manipulation
  Workout.aggregate([
    {
      $addFields: {
        durationTotal: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((getWorkout) => {
      res.json(getWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

//mongodb compass
