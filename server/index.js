const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const fs = require("fs");
configPath = './config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

const sqlite3 = require('sqlite3').verbose();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});
const Post = require("./models/post")(sequelize, Sequelize.DataTypes);

// avoid CORS issues
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectToDb = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

app.get("/api/getposts", async (req, res) => {
    const posts = await Post.findAll();
    res.send(JSON.stringify(posts, null, 2));

});

app.post("/api/createpost", (req, res) => {
    console.log(req.body);
    Post.create({
        title: req.body.title,
        desc: req.body.desc,
        org: req.body.org,
        datetime: req.body.datetime,
        location: req.body.location,
        image: req.body.image,
        interest: 0
    });
}),,

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
    connectToDb();
});
