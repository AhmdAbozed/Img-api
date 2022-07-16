/* eslint-env jasmine */

import fs, { existsSync } from "fs";
import supertest from "supertest";
import { app } from "../server.js";

const fsPromises = fs.promises;
const request = supertest(app);
/*
  To test the image processing:
   An image is sent to the endpoint with a defined size,
   then the test checks to see if a new resized img with the expected name is created

*/
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
