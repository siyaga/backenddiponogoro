const { Sequelize, DataTypes, Model } = require('sequelize');
//  driver sqlite
// const sequelize = new Sequelize('sqlite::memory:');

// sql server
const sequelize = new Sequelize('report', 'test', '123456', {
    dialect: 'mssql',
    dialectOptions: {
      // Observe the need for this nested `options` field for MSSQL
      options: {
        // Your tedious options here
        useUTC: false,
        dateFirst: 1,
      },
    },
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// tabelnya
db.historygenerates = require('./historygenerate')(sequelize, Sequelize);
db.historylogos = require('./historylogo')(sequelize, Sequelize);
db.historyuploads = require('./historyupload')(sequelize, Sequelize);
db.users = require('./user')(sequelize, Sequelize);
db.report = require('./report')(sequelize, Sequelize);
db.setup = require('./setup')(sequelize, Sequelize);




module.exports = db;