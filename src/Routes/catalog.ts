// import express from "express";
import * as express from "express";
import { Request, Response } from "express";
import { resizeImg } from "../controllers/imgResize.js";

const catalog = express.Router();
catalog.get("/img", (req: Request, res: Response) => {
  res.send("add imgName/width-height to current URL for resizing");
});

catalog.get("/img/:imgname/:x-:y", (req: Request, res: Response): void => {
  resizeImg(req.params.imgname, req.params.x, req.params.y, req, res);
});

export { catalog };
