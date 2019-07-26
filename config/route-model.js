const usersDb = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return usersDb("users").select("id", "username", "password");
}

function findBy(filter) {
  return usersDb("users").where(filter);
}

function add(user) {
  return usersDb("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return usersDb("users")
    .where({ id })
    .first();
}
