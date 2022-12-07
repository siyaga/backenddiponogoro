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
            type: Sequelize.DATEONLY
        },
        dateprojectend: {
            type: Sequelize.DATEONLY
        }, 
        reportedto: {
            type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        },
        company_id: {
            type: Sequelize.INTEGER
        }

    }, {
        
        paranoid:true,
        deleteAt: 'destroyTime'
    });
    return Setup;
};