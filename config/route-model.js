const authDb = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return authDb("auth").select("id", "username", "password");
}

function findBy(filter) {
  return authDb("auth").where(filter);
}

function add(user) {
  return authDb("auth")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return authDb("auth")
    .where({ id })
    .first();
}
