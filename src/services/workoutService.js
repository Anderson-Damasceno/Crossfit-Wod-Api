const Workout = require('../database/Workout');

const getAllWorkouts = (req, res) => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = (req, res) => {
    return;
};

const createNewWorkout = (req, res) => {
    return;
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