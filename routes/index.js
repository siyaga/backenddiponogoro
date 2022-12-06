var express = require('express');
var router = express.Router();
const upload = require("../middleware/upload");
const reportController = require("../controllers/report.controller");
const setupController = require("../controllers/setup.controller")
const moment = require('moment');




// Uplaod
router.post('/report/upload',upload.single('file'),reportController.uploads );

/* GET all tabel Report. */
router.get('/report', reportController.getReport);

// Add Setup
router.post('/setup', setupController.insertSetUp)





module.exports = router;
