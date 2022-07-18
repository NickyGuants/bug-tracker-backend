const request = require("supertest");
const app = require("../app");

describe("Test the login endpoint", () => {
  test("It should respond the GET method", done => {
    request(app)
      .get("/users/login")
      .then(response => {
        expect( response.statusCode ).toBe( 200 );
       
        done();
      });
  });
});