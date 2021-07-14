/**
 * Modules
 */
const UserService = require("../services/user.service");
const UserRouter = require("express").Router();
const userService = new UserService();
/**
 * Router get User
 */
UserRouter.get("/GetUser", (request, response) => {
  response.json({ message: { ...userService.viewUsers() } });
  response.end();
});

/**
 * Router create user
 */
UserRouter.post("/PostUser", (request, response) => {
  const body = request.body;
  response.json({ message: userService.createUser(body) });
  response.end();
});
/**
 * Router get user by id
 */
UserRouter.post("/GetUserById", (request, response) => {
  const body = request.body;
  response.json({ message: userService.viewUsersById(body) });
  response.end();
});

/**
 * Export modules
 */
module.exports = UserRouter;
