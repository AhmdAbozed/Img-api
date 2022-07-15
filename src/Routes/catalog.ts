import express from "express";

import { resizeImg } from "../controllers/imgResize.js";

const catalog = express.Router();
catalog.get("/img", (req, res) => {
  res.send("add imgName/width-height to current URL for resizing");
});

catalog.get("/img/:imgname/:x-:y", (req, res) => {
  resizeImg(req.params.imgname, req.params.x, req.params.y, req, res);
});

export { catalog };
