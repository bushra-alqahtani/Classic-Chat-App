const User = require("../models/user.model");
function getAllUsers(req, res) {
  User.find()
    .then((allUsers) =>
      res.json({
        success: true,
        records_count: allUsers.length,
        records: allUsers,
      })
    )
    .catch((err) => res.json({ errorMsg: "Failed to fetch all users" }));
  //   res.send("I'm going to send all users in database later");
}

function createNewUser(req, res) {
  User.create(req.body)
    .then((newlyCreatedUser) => res.json(newlyCreatedUser))
    .catch((err) => res.status(400).json(err));
}

function updateUser(req, res) {
  const { userId } = req.params;
  User.findOneAndUpdate({ _id: userId }, req.body, { new: true })
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => res.json(err));
}

function getUser(req, res) {
  const { userId } = req.params;
  User.findOne({ _id: userId })
    .then((user) => res.json(user))
    .catch((err) => res.json({ error: "Failed to fetch the user" }));
}

function deleteUserByName(req, res) {
  const { userName } = req.params;
  User.deleteOne({ name: userName })
    .then((result) => res.json(result))
    .catch((err) =>
      res.json({ error: true, message: "Failed to delete user" })
    );
}

// module.exports = getAllUsers;

module.exports = {
  getAllUsers,
  createNewUser,
  deleteUserByName,
  updateUser,
  getUser
};
