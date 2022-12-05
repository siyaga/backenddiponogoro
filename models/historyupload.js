module.exports = (sequelize, Sequelize) => {
    const HistoryUpload = sequelize.define("historyupload", {
        fileupload: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        }
    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return HistoryUpload;
};