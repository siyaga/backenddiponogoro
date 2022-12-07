
const db = require('../models');
const moment = require('moment');
const readXlsxFile = require("read-excel-file/node");

const Historygenerates = db.historygenerates;
const Historylogos = db.historylogos;
const Historyuploads = db.historyuploads;
const Reports = db.report;
const Setups = db.setups;
const Op = db.Sequelize.Op;



const uploads = async (req, res) => {
    try {
      if (req.file == undefined) {
        return res.status(400).send("Please upload an excel file!");
      }
  
      let path =
      '././public/uploads/' + req.file.filename;
  
      readXlsxFile(path).then((rows) => {
        // skip header
        rows.shift();
  
        let reports = [];
  
        rows.forEach((row) => {
          let validatorshift = row[2]
          if(validatorshift == "S2"){
            validatorshift = "Work"
          } else if(validatorshift == "dayoff"){
            validatorshift = "Holiday"
          }
          let validatorcheckin = row[3];
          let validatorcheckout = row[4];
          if(validatorcheckin == null && ( validatorshift == "Holiday" || validatorshift == "National Holiday") || validatorcheckout == null && (validatorshift == "Holiday" || validatorshift == "National Holiday" )){
            validatorcheckin = "00:00"
            validatorcheckout = "00:00"
          }
          if(validatorcheckin == null && validatorshift == "Work"){
            validatorcheckin = "08:00"
          }
          if(validatorcheckout == null && validatorshift == "Work"){
            validatorcheckout = "17:00"
          }
          let validatortask = row[8];
          if(validatortask == null){
            validatortask = row[11]
          } 
          if(validatortask == null){
            validatortask = row[7]
          }

          let validatordate = row[9];
          if(validatordate == null){
            validatordate = row[10]
          } 
          if(validatordate == null){
            validatordate = row[0]
          }
          
          let resultcheckin
          let resultcheckout
          if(validatorcheckin == null){
             
            resultcheckin = validatorcheckin
          }else {
            resultcheckin = validatorcheckin.slice(0,5)
          }
          if(validatorcheckout == null){
            resultcheckout = validatorcheckout
          }else {
            resultcheckout = validatorcheckout.slice(0,5)
          }
          let dateformat = moment(validatordate).format('YYYY-MM-DD')
          console.log(dateformat);
          let report = {
            name: row[1],
            date: dateformat,
            shift: validatorshift,
            in: resultcheckin,
            out: resultcheckout,
            task: validatortask,
          };
  
          reports.push(report);
          
        });
        let historyUpload = {
          fileupload: req.file.filename,
          description: req.body.description

        }
  
        Reports.bulkCreate(reports);
        Historyuploads.create(historyUpload)
          .then(() => {
            res.status(200).send({
              message: "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Failed to import data into database!",
              error: error.message,
            });
          });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Could not upload the file: " + req.file.originalname,
      });
    }
  };

const getReport = async (req, res) => {
  Reports.findAll({
    order: [['date', 'ASC']],
    attributes: ['id', 'name', 'date','shift','in','out','task']
  })
    .then(report => {
      if (report.length < 1) {
        

        res.send({
          message: "report tidak ada"
        });
      } else {
        
        res.send({report});
      }
    })
    .catch(err => {
      res.json({
        info: "Error",
        message: err.message
      });
    });
}  

const getFilterSingle = async (req, res) => {
  const namebody = req.body.name;
  const dateStartbody = req.body.datestart
  const dateEndbody = req.body.dateend

  Reports.findAll({
    where: {
      name: namebody,
      date: {[Op.between] :[dateStartbody, dateEndbody]}
    },
    order: [['date', 'ASC']],
    attributes: ['id', 'name', 'date','shift','in','out','task']
  })
    .then(report => {
      if (report.length < 1) {
        

        res.send({
          message: "report tidak ada"
        });
      } else {
        
        res.send({report});
      }
    })
    .catch(err => {
      res.json({
        info: "Error",
        message: err.message
      });
    });
}  

const getFilterMulti = async (req, res) => {
  const dateStartbody = req.body.datestart
  const dateEndbody = req.body.dateend

  Reports.findAll({
    where: {
      date: {[Op.between] :[dateStartbody, dateEndbody]}
    },
    order: [['date', 'ASC']],
    attributes: ['id', 'name', 'date','shift','in','out','task']
  })
    .then(report => {
      if (report.length < 1) {
        

        res.send({
          message: "report tidak ada"
        });
      } else {
        
        res.send({report});
      }
    })
    .catch(err => {
      res.json({
        info: "Error",
        message: err.message
      });
    });
}  
  

  module.exports = {
    uploads,
    getReport,
    getFilterSingle,
    getFilterMulti
  };