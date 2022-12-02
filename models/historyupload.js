module.exports = (sequelize, Sequelize) => {
    const HistoryUpload = sequelize.define("historyupload", {
        fileupload: {
            type: Sequelize.STRING
        }
    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return HistoryUpload;
};