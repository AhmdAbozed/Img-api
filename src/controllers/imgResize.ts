import fs, { existsSync } from "fs";
import http from "http";
import sharp from "sharp";

async function resizeImg(
  source: string,
  x: string,
  y: string,
  req1: http.IncomingMessage,
  res1: http.ServerResponse
): Promise<void> {
  if (Number(x) && Number(y)) {
    if (existsSync(`./images/processedImgs/${source}${x}-${y}.jpg`)) {
      console.log("already exists!");
      fs.readFile(
        `./images/processedImgs/${source}${x}-${y}.jpg`,
        async (err, img) => {
          if (err) throw err;
          res1.end(img);
        }
      );
    } else if (existsSync(`./images/${source}.jpg`)) {
      const resize = await sharp(`./images/${source}.jpg`).resize(
        Number(x),
        Number(y)
      );
      await resize.toFile(`./images/processedImgs/${source}${x}-${y}.jpg`);
      const img = await resize.toBuffer();
      res1.writeHead(200, { "Content-Type": "image/jpeg" });
      res1.end(img);
    } else res1.end("Img doesnt exist");
  } else res1.end("Invalid URL parameters");
}

export { resizeImg };
