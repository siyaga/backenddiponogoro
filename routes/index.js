var express = require('express');
var router = express.Router();
const upload = require("../middleware/upload");
const reportController = require("../controllers/report.controller");
const loginController = require("../controllers/login.controller");
const moment = require('moment');




// Uplaod
router.post('/report/upload',upload.single('file'),reportController.uploads );

/* GET all tabel Report. */
router.get('/report', reportController.getReport);

// create Products
router.post('/login', loginController.login);
  



module.exports = router;
