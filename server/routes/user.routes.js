const UserController = require("../controllers/user.controller")
function registerUserRoutes(app)
{
    app.get("/api/users", UserController.getAllUsers)
    app.post("/api/users/new", UserController.createNewUser)
    app.get("/api/users/:userId", UserController.getUser)
    app.put("/api/users/edit/:userId", UserController.updateUser)
    app.delete("/api/users/deletebyname/:userName", UserController.deleteUserByName)
}

module.exports = registerUserRoutes