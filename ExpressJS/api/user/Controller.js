const { connect } = require("mongoose");
require("dotenv").config();
const user = require("./Model");
const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    await connect(process.env.MONGO_URL);

    const checkDuplication = await user.exists({ email: email });
    if (checkDuplication) {
      res.json({
        message: "Account already exists!",
      });
    } else {
      await user.create({
        email,
        username,
        password: await hash(password, 12),
      });
      res.json({
        message: "Account Created Successfully!",
      });
    }
  } catch (error) {
    res.json({
      message: "Error" + error.message,
    });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    await connect(process.env.MONGO_URL);

    const checkUser = await user.findOne({ email: email });

    if (checkUser) {
      const decryptedPass = await compare(password, checkUser.password);

      if (!decryptedPass) {
        res.json({
          message: "Wrong Password",
        });
      } else {
        const token = sign(
          {
            id: checkUser._id,
            username: checkUser.username,
            email: checkUser.email,
            profileImage: checkUser.profileImage,
          },
          process.env.JWT_SECRET
        );

        res.json({
          message: "Login Successfully",
          user: token,
        });
      }
    } else {
      res.json({
        message: "Account not exists!",
      });
    }
  } catch (error) {
    res.json({
      message: "Error" + error.message,
    });
  }
};

module.exports = { userLogin, userSignUp };
