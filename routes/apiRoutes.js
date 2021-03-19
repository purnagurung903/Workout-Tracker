const router = require("express").Router();

const Workout = require("../models/workout.js");
// get all workouts from database
router.get("/api/workouts", (req, res) => 
{
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});
// update an existing workout
router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
// create a new workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    }) 
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
