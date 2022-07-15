/* eslint-env jasmine */

import fs, { existsSync } from "fs";
import supertest from "supertest";
import { app } from "../server.js";

const fsPromises = fs.promises;
const request = supertest(app);

describe("img resizing functions: ", () => {
  it("resize img", async () => {
    const file = await fsPromises.readFile(`./images/testImgs/testingImg.jpg`);
    await fsPromises.writeFile("./images/testingImg.jpg", file);
    await request.get("/img/testingImg/500-300");
    expect(existsSync("./images/processedImgs/testingImg500-300.jpg")).toBe(
      true
    );
  });
});
