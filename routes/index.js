var express = require('express');
var router = express.Router();
const multer = require('multer');
const moment = require('moment');

const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '././public/images');
  },
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + '-' + file.originalname);
  }
});
/* 
db.historygenerates = require('./historygenerate')(sequelize, Sequelize);
db.historylogos = require('./historylogo')(sequelize, Sequelize);
db.historyupload = require('./historyupload')(sequelize, Sequelize);
db.report = require('./report')(sequelize, Sequelize);
db.setup = require('./setup')(sequelize, Sequelize);
*/
const db = require('../models');
const {
  request
} = require('../app');
const Historygenerates = db.historygenerates;
const Historylogos = db.historylogos;
const Historyuploads = db.historyuploads;
const Reports = db.report;
const Setups = db.setup;
const Op = db.Sequelize.Op;

const kirim = multer({
  storage: fileStorage
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/generatetime', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/historyupload', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/historygenerate', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
