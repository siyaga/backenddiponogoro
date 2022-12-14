var express = require('express');
var router = express.Router();
const upload = require("../middleware/upload");

const jwt = require('jsonwebtoken');
const reportController = require("../controllers/report.controller");
const setupController = require("../controllers/setup.controller");
const loginController = require("../controllers/login.controller");
const moment = require('moment');



//  Middle ware Login
// passport.authenticate("jwt", {
//     session: false
//   }),

// Uplaod
router.post('/report/upload',upload.single('file'),reportController.uploads );

/* GET all tabel Report. */
router.get('/report', reportController.getReport);

// Add Setup
router.post('/setup', setupController.insertSetUp)












/* Login. */
router.post('/login', loginController.login);
/* Regis. */
router.post('/register', loginController.register);

module.exports = router;
