module.exports = (sequelize, Sequelize) => {
    const HistoryLogo = sequelize.define("historylogo", {
        filelogo: {
            type: Sequelize.STRING
        },
        company_name: {
            type: Sequelize.STRING
        }
    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return HistoryLogo;
};