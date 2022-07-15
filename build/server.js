import express from "express";
import bodyParser from "body-parser";
import { catalog } from "./Routes/catalog.js";
var app = express();
var port = 3000;
app.listen(port, function () {
    console.log("listening on ".concat(port));
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", catalog);
export { app };
