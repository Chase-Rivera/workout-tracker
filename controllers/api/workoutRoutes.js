const router = require("express").Router();
const Workout = require("../../models/workoutModel");

router.get("/", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
    }
])
    .sort({ day: 1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.post("/", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.put("/:id", (req, res) => {
    console.log(req.body)
    Workout.updateOne({ _id: req.params.id }, {  $push: { exercises: req.body } })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get("/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
        }
    }
])
    .sort({_id: -1})
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout.reverse());
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;

