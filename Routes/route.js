const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController') 



router.get("/user/add.html", (req, res) => {
    res.render("user/add");
  });

  
router.post("/user/add.html", userController.GetData);

router.get('/', userController.ShowData);
  
router.get('/view/:id', userController.ViewData);

router.get('/edit/:id', userController.EditData);

router.delete('/edit/:id', userController.DeleteData);
  
router.put('/edit/:id', userController.UpdataData);

router.post('/search', userController.SearchData);
  

module.exports = router