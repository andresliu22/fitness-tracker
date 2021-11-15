const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
    type: Number,
  },
  exercises: [{
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    distance: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
  }],
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
