const Users = require("../Models/UsersModel");
const bcrypt = require("bcrypt");
exports.getUser = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json({
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.register = async (req, res) => {
  const { email, username, name, password } = req.body;
  try {
    const encryptedPass = await bcrypt.hash(password, 10);
    const users = await Users.create({
      email,
      username,
      name,
      password: encryptedPass,
    });
    res.status(200).json({
      registered: users,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Username Is Unavailable",
    });
  }
};
exports.login = async (req, res) => {
  const { email, username, name, password } = req.body;

  try {
    const users = await Users.create({
      email,
      username,
      name,
      password,
    });
    res.status(200).json({
      registered: users,
    });
  } catch (error) {
    res.status(400).json({
      error: "data tidak dapat dimasukkan",
    });
  }
};
