const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require('morgan')
const cookieParser = require("cookie-parser")
const fileupload = require("express-fileupload")

//reuglar middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//cookies and file
app.use(cookieParser)
app.use(fileupload)

// morgan middleware 
morgan('tiny')


// import all routes here
const home = require("./routes/home");
app.use("/api/v1", home);

// export app.js
module.exports = app;
