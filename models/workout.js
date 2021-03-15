const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({


  day: {
    type: Date,
    default: Date.now

  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"

      },
      duration: {
        type: Number,
        required: "Enter a valid duration"
      },
      weight: {
        type: Number,
        default: 0,
        required: "Enter a weight"
      },
      reps: {
        type: Number,
        default: 0,
        required: "Enter a total number of reps"
      },
      sets: {
        type: Number,
        default: 0,
        required: "Enter a total number of weights"
      }
    }
  ]


});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;