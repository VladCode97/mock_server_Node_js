/**
 * @class UserServices
 */
class UserService {
  constructor() {
    this.users = new Array();
  }

  createUser(users) {
    this.users.push({ ...users });
    return this.users;
  }

  viewUsers() {
    return this.users;
  }

  viewUsersById(content) {
    const result = this.users.filter((element) => element.id == content.id);
    console.log(result);
    if (result.length > 0) {
      return result;
    } else {
      return "No found user";
    }
  }
}

/**
 * Export modules
 */
module.exports = UserService;
