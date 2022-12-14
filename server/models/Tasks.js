module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define("Tasks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    State: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });

  Tasks.associate = (models) => {
    Tasks.hasMany(models.Tasks, {
      onDelete: "cascade",
    });
  };

  return Tasks;
};
