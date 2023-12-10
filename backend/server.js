require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")
const userRoutes = require('./routes/user')

// Creating App
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)

// Connect
mongoose.connect('mongodb://0.0.0.0:27017/MERNstack')
    .then(() => {
        //listening to the request
        app.listen(process.env.PORT, () => {
            console.log("The server is started on port No: " + process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })



