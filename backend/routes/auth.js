const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUsers = require("../middleware/fetchUser");
const JWT_SIGN = "Shoppo";

// Route 1 : Register/create a User

router.post(
  "/createuser",
  [
    body("first_name").exists().isString(),
    body("last_name").exists().isString(),
    body("username").exists().isString(),
    body("email").isEmail(),
    body("phone"),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, username, first_name, last_name, phone, password } =
      req.body;
    try {
      let user = await User.findOne({ username });

      if (user) {
        return res.status(400).json({
          error: "Sorry A user with This Username is already registered",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const secretPassword = await bcrypt.hash(password, salt);
      user = User.create({
        username,
        first_name,
        last_name,
        email,
        phone,
        password: secretPassword,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const auth = jwt.sign(data, JWT_SIGN);

      res.json({
        auth,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

// Route 2 : To Confirm Login

router.post(
  "/user",
  [
    body("username", "Enter a Valid Username").exists().isString(),
    body("password", "Password cant be Blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ error: "Please Use Right Credentials" });
      }

      const passCompare = await bcrypt.compare(password, user.password);

      if (!passCompare) {
        return res.status(400).json({ error: "Please Use right credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const auth = jwt.sign(data, JWT_SIGN);

      res.json({
        auth,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 3 : Get a User Details

router.post("/getuser", fetchUsers, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
