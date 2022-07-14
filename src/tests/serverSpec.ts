import {add5} from "../server.js"

it("Adds 5 to value", ()=>{
    expect(add5(5)).toBe(10);
})