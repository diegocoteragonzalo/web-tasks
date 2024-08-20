const express = require("express")


let app = express();
let port = 8081;


const routerTasks = require("./routers/routerTasks")
app.use("/tasks", routerTasks)


app.listen(port, () => {
	console.log("Servidor activo: http://localhost:8081");
})
