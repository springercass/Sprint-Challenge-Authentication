const request = require("supertest");
const db = require("../database/dbConfig");
const Users = require("../config/route-model");

const server = require("../api/server");

describe("routes", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("register", () => {
    it("should add a user to the db", async () => {
      const users = await db("users");

      await Users.add({ username: "bob", password: "password" });

      const newUsers = await db("users");

      expect(newUsers).toHaveLength(users.length + 1);
    });
  });

  describe("register", () => {
    it("should return a 201", () => {
      const newUser = {
        username: "new user2",
        password: "password"
      };

      return request(server)
        .post(`/api/register`)
        .send(newUser)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});
