module.exports = (sequelize, Sequelize) => {
    const HistoryGenerate = sequelize.define("historygenerate", {
        name: {
            type: Sequelize.STRING
        },
        filegenerate: {
            type: Sequelize.STRING
        }
    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return HistoryGenerate;
};