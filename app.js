const express = require("express");
const app = express();
const mongoose = require("mongoose");
// Import Database
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
// 
const cors = require('cors');
app.use(cors())
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
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;

// +++++++++
// app.listen(port, () => {
//   console.log(`http://localhost:${port}/`);
// });

app.listen(PORT, () => {
  console.log('listening on port: 4000');
});
// =========== CONNECT DATABASE  ==============

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connect Successfully!")
  })
  .catch((err) => {
    console.log(err);
  });

// =========== IMPORT FILE ROUTES  ==============

app.use(Routes)
