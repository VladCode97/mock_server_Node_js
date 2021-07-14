/**
 * Routes
 */
const UserRouter = require("./routes/users-routes");
const bodyParser = require("body-parser");
const App = require("express")();
/**
 * Middlewares
 */
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());
/**
 * Routes
 */
App.use("/user", UserRouter);
/**
 * Listen
 */
App.listen(3000, () => console.log("http://localhost:3000"));
