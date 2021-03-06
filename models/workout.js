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
        required: "Duration required"
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
      },
      duration: { 
        type: Number,
        required: "How long before you drop dead?"
    }
    }
  ]


});
// //adds a dynamically- created property to schema
// workoutSchema.virtual("totalDuration").get(function() {
//    // "reduce" array of exercises down to just the sum of their durations
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;