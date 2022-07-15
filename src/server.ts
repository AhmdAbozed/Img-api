import express from "express";
import bodyParser from "body-parser";
import { catalog } from "./Routes/catalog.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", catalog);

export { app };
