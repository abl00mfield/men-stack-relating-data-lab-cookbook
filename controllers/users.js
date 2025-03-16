const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

//index route - show all users that have
//accounts
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.render("users/index.ejs", {
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
});

//show an individual user's pantry items
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const pantry = user.pantry;
    res.render("users/show.ejs", { user, pantry });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving user");
  }
});

module.exports = router;
