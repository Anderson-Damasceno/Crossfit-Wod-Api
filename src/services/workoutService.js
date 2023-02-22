const {v4: uuid} = require("uuid");
const Workout = require('../database/Workout');

const getAllWorkouts = (req, res) => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = (req, res) => {
    return;
};

const createNewWorkout = (req, res) => {
    const workoutToInsert = {
        ...createNewWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-Us", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-Us", {timeZone: "UTC"}),
    };

    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};

const updateOneWorkout = (req, res) => {
    return;
};

const deleteOneWorkout = (req, res) => {

};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}