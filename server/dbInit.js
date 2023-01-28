const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});

const Posts = require("./models/post")(sequelize, Sequelize.DataTypes);

const force = process.argv.includes("--force") || process.argv.includes("-f");

sequelize
  .sync({ force })
  .then(async () => {
    const posts = [
        Posts.upsert({
            title: "this is post one",
            desc: "it is very unique"
        }),
    ];
    await Promise.all(posts);
    console.log("Database synced");
    sequelize.close();
  })
  .catch(console.error);
