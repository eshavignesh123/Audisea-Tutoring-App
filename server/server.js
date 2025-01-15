const {connectDB, getDb} = require("./connect");
const express = require("express");
const cors = require("cors");
const tutors = require("./routes/tutorRoutes");
const authRoutes = require('./routes/auth');

connectDB();

const app = express();
const PORT = 4000;

app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json())
app.use(tutors)
app.use(authRoutes);


app.listen(PORT, () =>{
  console.log( `Successfully connected to ${PORT}`);

})