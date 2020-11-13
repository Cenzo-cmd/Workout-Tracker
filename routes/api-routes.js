const { response } = require("express");
const Workout = require("../models/Workout");

module.exports = (app) => {

    app.get("/api/workouts", (request, response) => {
        Workout.find({}).then(data => {
            response.json(data);
        });
    });

    app.post("/api/workouts/", (request, response) => {
        Workout.create({}).then(data => {
            response.json(data);
        });
    });

    app.put("/api/workouts/:id", (request, response) => {
        Workout.findByIdAndUpdate(request.params.id, { $push: { exercises: request.body } }, { new: true }).then(data => {
            response.json(data);
        });
    });

    app.get("/api/workouts/range", (request, response) => {
        Workout.find({}).then(data => {
            response.json(data);
        });
    });
};