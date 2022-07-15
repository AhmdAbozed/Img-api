/* eslint-env jasmine */

import supertest from "supertest";
import { app } from "../server.js";

const request = supertest(app);
describe("endpoint response", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/img");
    expect(response.status).toBe(200);
  });
});
