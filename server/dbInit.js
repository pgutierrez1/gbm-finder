const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});

const Posts = require("./models/post")(sequelize, Sequelize.DataTypes);
const RecentPost = require("./models/post")(sequelize, Sequelize.DataTypes);


const force = process.argv.includes("--force") || process.argv.includes("-f");

sequelize
  .sync({ force })
  .then(async () => {
    const posts = [
        RecentPost.upsert({
            title: "Post about a cool event",
            datetime: "2023-01-29T02:51",
            org: "By an organziation",
            desc: "It is full of information",
            location: "And it has a location",
            interest: 200
        }),
        Posts.upsert({
            title: "Very epic GBM for a UF club",
            datetime: "2023-01-29T02:51",
            org: "Microsoft and Google (what)",
            desc: "$$$$$$$$$$$$$$$",
            location: "CSE A101",
            interest: 50000
        }),
    ];
    await Promise.all(posts);
    console.log("Database synced");
    sequelize.close();
  })
  .catch(console.error);
