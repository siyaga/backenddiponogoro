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
            type: Sequelize.DATE
        },
        dateprojectend: {
            type: Sequelize.DATE
        }
    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return HistoryGenerate;
};