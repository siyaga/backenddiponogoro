var express = require('express');
const passport = require('passport');
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
router.post('/report/upload',passport.authenticate("jwt", {
    session: false
  }),upload.single('file'),reportController.uploads );

/* GET all tabel Report. */
router.get('/report', reportController.getReport);
/* GET Filter single tabel Report. */
router.get('/report/filter/single',passport.authenticate("jwt", {
    session: false
  }), reportController.getFilterSingle);
/* GET Filter tabel Multi. */
router.get('/report/filter/multi', reportController.getFilterMulti);
/* GET Detail tabel Report. */
router.get('/report/detail/:id', reportController.getReportById);
/* PUT update tabel Report. */
router.put('/report/update/:id', reportController.editReport);


// Add Setup
router.post('/setup', setupController.insertSetUp)












/* Login. */
router.post('/login', loginController.login);
/* Regis. */
router.post('/register', loginController.register);
/* Login. */
router.get('/logout', loginController.logout);

module.exports = router;
