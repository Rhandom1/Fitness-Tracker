const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    excercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter the type of excercise"
            },

            name: {
                type: String,
                trim: true,
                required: "Enter a name for the excercise"
            },

            duration: {
                type: Number,
                trim: true,
                required: "Enter the duration of the excercise"
            },
            weight: {
                type: Number,
                trim: true,
                reuired: true
            },

            reps: {
                type: Number,
                trim: true,
                reuired: true
            },
            
            sets: {
                type: Number,
                trim: true,
                reuired: true
            },

            distance: {
                type: Number,
                trim: true,
                reuired: true
            },
        },
    ],
},
    {
        toJSON: {
            virtuals: true,
        },
    },
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;