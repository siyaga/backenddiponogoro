
const db = require('../models');
var bcrypt = require('bcrypt');

const config = require('../config');
const jwt = require('jsonwebtoken');

const Users = db.users;
const Op = db.Sequelize.Op;

const login = async (req, res) => {
    Users.findOne({
        where: {
          username: req.body.username
        }
      })
      .then(data => {
        if (data) {
          var loginValid = bcrypt.compareSync(req.body.password, data.password);
          if (loginValid) {
            // JWT Authentication
            let payload = {
              userid: data.id,
              username: req.body.username
            };
  
            let token = jwt.sign(
              payload,
              config.secret, {
                expiresIn: '12h'
              }
  
            )
            let dt = new Date();
            dt.setHours(dt.getHours() + 12);
            res.json({
              success: true,
              token: token,
              expired: dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString()
            });
          } else {
            res.json({
              message: "username dan password Salah"
            })
          }
  
        } else {
          res.json({
            message: "username dan password Salah"
          });
        }
      })
      .catch(err => {
        res.json({
          message: "username dan password Salah"
        });
      });
  

}

const register = async (req, res, next) => {

  
  let passwordHash = bcrypt.hashSync(req.body.password, 10);
  let user = {
    username: req.body.username,
    password: passwordHash
  }
  Users.create(user)
    .then(data => {
      res.send({
        message: "Berhasil Registrasi"
      });
    })
    .catch(err => {
      res.json({
        info: "Error",
        message: err.message
      });
    });
  
}

const logout = async (req, res, next) =>{
  req.session.destroy();

}


module.exports = {
    login,
    register,
    logout
  };