module.exports = (sequelize, Sequelize) => {
    const Setup = sequelize.define("setup", {
        name: {
            type: Sequelize.STRING
        },
        projectcode: {
            type: Sequelize.STRING
        },  
        projectname: {
            type: Sequelize.STRING
        },
        dateprojectstart: {
            type: Sequelize.DATE
        },
        dateprojectend: {
            type: Sequelize.DATE
        }, 
        reportedto: {
            type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        }

    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return Setup;
};