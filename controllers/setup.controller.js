const db = require('../models');

const Setup = db.setups;
const Op = db.Sequelize.Op;

const insertSetUp = async (req, res) => {
  // console.log(req.body)
    let setup = {
        name: req.body.name,
        projectcode : req.body.projectcode,
        projectname : req.body.projectname,
        dateprojectstart: req.body.dateprojectstart,
        dateprojectend: req.body.dateprojectend,
        reportedto: req.body.reportedto,
        position: req.body.position,
        company_id: req.body.company_id
      }
      // console.log(setup)
      Setup.create(setup)
          .then(() => {
            res.status(200).send({
              message: "insert setup is successfully ",
              data:setup
              
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to Insert data into database!",
              error: error.message,
            });
          });

    
  };

  const getSetup = async (req, res) => {
    Setup.findAll({
      attributes: ['id', 'name', 'projectcode','projectname','dateprojectstart','dateprojectend','reportedto', 'position', 'company_id']
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
    insertSetUp, getSetup
  };
