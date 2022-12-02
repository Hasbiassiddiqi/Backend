const express = require("express");
const app = express();
const sequelize = require("./Config/db");
const dotenv = require("dotenv");
// const Users = require("./Models/UsersModel");
const router = require("./Routes/Users");
const port = 5500;
dotenv.config();
sequelize.sync().then(console.log("Database Ready ..."));

app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log(`Server Running At Port ${port}`));
