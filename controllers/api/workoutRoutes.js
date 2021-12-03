const router = require("express").Router();
const {Workout} = require("../../models");

//GET excercise and Stats
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercise.duration',
        },
      },
    },
  ])
  .then((workoutdb) => {
    res.join(err);
  })
  .catch((err) => {
    res.json(err);
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
    // validates data to schema
    { new:true, runValidators:true}
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
router.get("/workouts/range", (req, res) => {
    console.log("You hit duration!");
  //all purpose tool for data manipulation
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
  .sort({ _id: -1 })
  .limit(7)
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

//mongodb compass
