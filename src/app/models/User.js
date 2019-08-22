const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
    }, {
            hooks: {
                beforeSave: async user => {
                    if (user.password) {
                        user.password_hash = await bcrypt.hash(user.password, 8)
                    }
                }
            }
        });

    Users.prototype.checkPassword = function(password) {
        return bcrypt.compare(password, this.password_hash)
        // "this" is to reference the user
    }    

    return Users;
};