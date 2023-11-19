const express = require("express");
const app = express();
const mongoose = require("mongoose");
// Port
const port =  process.env.PORT || 3000
// Send Data
app.use(express.urlencoded({ extended: true }));
// Get Data
app.set('view engine', 'ejs')
// Static File (HTML , CSS , JS)
app.use(express.static('public'))
// Delete
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
// Routes
const Routes = require('./Routes/route')
// Cors
const cors = require("cors")
app.use(cors)
// =========== AUTO REFRESH ==============
 
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// =========== APP LISTEN ==============

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

// =========== CONNECT DATABASE  ==============

mongoose
  .connect("mongodb+srv://CourseNodeJS:01023982624NodeJS@cluster0.uoejedo.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connect Successfully!")
  })
  .catch((err) => {
    console.log(err);
  });

// =========== IMPORT FILE ROUTES  ==============

app.use(Routes)
