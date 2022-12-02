exports.authRegist = (req, res, next) => {
  const { email, username, password } = req.body;
  const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  if (!checkEmail) {
    res.status(400).json({
      msg: "You have Entered Invalid Email Adress",
    });
  } else if (!username) {
    res.status(400).json({
      msg: "Usernme is Required",
    });
  } else if (!email) {
    res.status(400).json({
      msg: "Email is Required",
    });
  } else if (password.length < 8) {
    res.status(400).json({
      msg: "Password min 8",
    });
  } else {
    next();
  }
};
