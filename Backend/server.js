const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
connectDB();
const port = 5000;

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./Routes/userRoutes"));



app.listen(port, () => {
    console.log(`App started on port ${port}`);
  });