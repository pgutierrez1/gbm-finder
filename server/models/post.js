module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "post",
    {
        title: {
            type: DataTypes.STRING,
                unqiue: true,
        },
        desc: {
            type: DataTypes.TEXT,
        },
    },
    {
      timestamps: false,
    }

  );
};
