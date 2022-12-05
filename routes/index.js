var express = require('express');
var router = express.Router();
const upload = require("../middleware/upload");
const reportController = require("../controllers/report.controller");
const moment = require('moment');




// Uplaod
router.post('/report/upload',upload.single('file'),reportController.uploads );

/* GET all tabel Report. */
router.get('/report', reportController.getReport);





module.exports = router;
