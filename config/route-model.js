const authDb = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return authDb("users").select("id", "username", "password");
}

function findBy(filter) {
  return authDb("users").where(filter);
}

function add(user) {
  return authDb("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return authDb("users")
    .where({ id })
    .first();
}
