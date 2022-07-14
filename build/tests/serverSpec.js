import { add5 } from "../server.js";
it("Adds 5 to value", function () {
    expect(add5(5)).toBe(10);
});
