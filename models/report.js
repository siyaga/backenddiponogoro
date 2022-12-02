module.exports = (sequelize, Sequelize) => {
    const Report = sequelize.define("report", {
        name: {
            type: Sequelize.STRING
        },
        filelogo: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        Shift: {
            type: Sequelize.STRING
        }, 
        in: {
            type: Sequelize.STRING
        },
        out: {
            type: Sequelize.STRING
        }, 
        task: {
            type: Sequelize.STRING
        }

    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return Report;
};