module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "recentpost",
    {
        title: {
            type: DataTypes.STRING,
                unqiue: true,
        },
        desc: {
            type: DataTypes.TEXT,
        },
        org: {
            type: DataTypes.STRING,
        },
        datetime: {
            type: DataTypes.TEXT,
        },
        location: {
            type: DataTypes.TEXT
        },
        interest: {
            type: DataTypes.INTEGER,
        },
        image: {
            type: DataTypes.BLOB,
        }
    },
    {
      timestamps: false,
    }

  );
};
