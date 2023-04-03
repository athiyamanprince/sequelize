const express = require('express');
const app = express();
const taskDetailsController = require('./controller/taskDetails');


app.get("/getAllTasks",(req, res) => {
    try {
        taskDetailsController.getAllTasks(req)
    } catch (err) {
        console.log("err..: ",err);
    }
});

const server = app.listen(5001, function () {
    console.log("Listening on port %s...", server.address().port);
})