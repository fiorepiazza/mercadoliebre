const express = require("express");
const app = express()
const path = require("path")

const port = process.env.PORT || 3030;

app.listen(port, ()=>console.log("Servidor corriendo en el puerto http://localhost:" + port));

app.use(express.static(path.resolve("./public")))

app.set("views", path.resolve("./views"));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"./views/home.html"))
})

app.get("/registrar", function(req,res){
    res.sendFile(path.resolve("./src/views/registrar.html"))
})

app.get("/login", function(req,res){
    res.sendFile(path.resolve("./src/views/login.html"))
})