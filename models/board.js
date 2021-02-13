module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }
    });

    Board.associate = (models) => {
        Board.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Board.hasMany(models.Task, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Board;
};
