const express = require("express")
let routerTasks = express.Router()


let tasks = require("../data/tasks")

routerTasks.get("/", (req, res) => {
	res.send(tasks);
})

module.exports = routerTasks
