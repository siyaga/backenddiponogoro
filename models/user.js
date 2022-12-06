module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
        
        // ,
        // created: {
        //     type: Sequelize.DATE

        // }
    });

    return User;
};