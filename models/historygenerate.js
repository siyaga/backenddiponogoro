module.exports = (sequelize, Sequelize) => {
    const HistoryGenerate = sequelize.define("historygenerate", {
        name: {
            type: Sequelize.STRING
        },
        filegenerate: {
            type: Sequelize.STRING
        },
        filterbyname: {
            type: Sequelize.STRING
        },
        dateprojectstart: {
            type: Sequelize.DATEONLY
        },
        dateprojectend: {
            type: Sequelize.DATEONLY
        }
    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return HistoryGenerate;
};