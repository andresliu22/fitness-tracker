const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate({_id: req.params.id}, {$push: { exercises: req.body }})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
    res.status(400).json(err);
    });
});

router.post("/api/workouts/", ({body}, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({}, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
    res.status(400).json(err);
    });
})
module.exports = router;
