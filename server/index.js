const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const fs = require("fs");
configPath = './config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

// const sqlite3 = require('sqlite3').verbose()
// const db = new sqlite3.Database(':memory:')

// const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/api/getposts", (req, res) => {
    res.send("server is online woah");
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
