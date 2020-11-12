const { request } = require("express");
const path = require("path");

module.exports = (app) => {

    app.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/exercise.html"))
    });

};