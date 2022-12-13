const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define("Projects", {
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
    Type: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Visibility: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //ToDO : lier le createur et les membres
    //Todo : liers les taches du projets
  });

  return Projects;
};
