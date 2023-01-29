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
            title: "GBM #1",
            datetime: "",
            org: "Girls Who Code",
            desc: "HTML/CSS and Front-End Development. Food will be provided.",
            location: "NPB1002",
            interest: 200
        }),
        RecentPost.upsert({
            title: "Study Session",
            datetime: "4-7pm",
            org: "Girls Who Code",
            desc: "Study and hangout with WiCSE members!",
            location: "Marston Basement Carson L118",
            interest: 200
        }),
        RecentPost.upsert({
            title: "Technical Workshop",
            datetime: "6pm",
            org: "ACM, Association for Computing Machinery",
            desc: "LeetCode technical workshop and interview prep",
            location: "The Fishbowl",
            interest: 200
        }),
        RecentPost.upsert({
            title: "Tech Talk with Google Cloud",
            datetime: "5pm",
            org: "SSD, Society of Software Developers",
            desc: "Google Cloud Guest Speaker. Resume tips, intro to Google Cloud Platform",
            location: "Weil Hall 234",
            interest: 200
        }),
        RecentPost.upsert({
            title: "Casual Coding",
            datetime: "4pm",
            org: "OSC, Open Source Club",
            desc: "Code and hangout and chill",
            location: "CSE E404",
            interest: 200
        }),
    ];
    await Promise.all(posts);
    console.log("Database synced");
    sequelize.close();
  })
  .catch(console.error);
