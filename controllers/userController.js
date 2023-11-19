// Updata And Create Time
var moment = require('moment')
// Import File Schema
const User  = require("./../models/Mydata")

// =========== ADD DATA IN DATABASE ==============
const GetData = (req, res) => {
    const user = new User(req.body);
    user
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
// =========== SHOW  ALL DATA ===============
const ShowData = (req, res) => {
    User.find()
      .then((result) => {
        res.render('index.ejs', { data: result , moment: moment});
      })
      .catch((err) => {
        console.error(err);
    });
  }
// =========== Edit  DATA BY ID In File Edit ==============
const ViewData = (req, res) => {
    const id = req.params.id
    User.findById(id)
      .then((result) => {
        res.render("user/view", { data: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  };
// =========== Edit  DATA BY ID In File Edit ==============
const EditData = (req, res) => {
    const id = req.params.id
    User.findById(id)
      .then((result) => {
        res.render('user/edit', { data: result , moment: moment  });
      })
      .catch((err) => {
        console.error(err);
    });
  }

// =========== DELETE  DATA BY ID ==============
const DeleteData = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        console.error(err);
    });
  }

// =========== UPDATE  DATA BY ID ==============
const UpdataData = (req, res) => {
    const id = req.params.id
    User.findByIdAndUpdate(id,req.body)
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        console.error(err);
    });
  }
// =========== SEARCH  DATA  ==============
const SearchData = (req, res) => {
    const searchText = new RegExp(req.body.searchText.trim(), 'i')  
    User.find({ $or: [{firstname: searchText}, {lastname: searchText}] })
      .then((result) => {
        res.render("user/search", { data: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }


module.exports = {GetData,ShowData,ViewData,EditData,DeleteData,UpdataData,SearchData}