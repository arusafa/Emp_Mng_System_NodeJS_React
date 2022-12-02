import express, { json } from "express";
import employeeRoutes from "./routes/employees";
import { connect } from "mongoose";
const app = express()
const SERVER_PORT = process.env.PORT || 8000;

app.use(json())

connect("mongodb+srv://fall2022_comp3123:SAFA.aru1993@cluster0.lclqo7i.mongodb.net/comp3123_assignment2?retryWrites=true&w=majority", {

useNewUrlParser:true,
useUnifiedTopology:true
})

app.route("/hello")
    .get((req, res) => {
    res.send("Hello World from Safa Aru")
})

//employeeAPI
app.use("/api/", employeeRoutes)

//userRouter
import userRoutes from "./routes/users";
//userAPI
app.use("/api/", userRoutes)

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
    console.log("Press CTRL + C to stop server")
});




