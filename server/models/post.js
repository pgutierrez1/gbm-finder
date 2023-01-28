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
        org: {
            type: DataTypes.STRING,
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
