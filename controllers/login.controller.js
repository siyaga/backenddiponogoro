
const db = require('../models');


const Users = db.users;

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


module.exports = {
    login
  };