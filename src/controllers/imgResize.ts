import fs, { existsSync } from "fs";
import http from "http";
import sharp from "sharp";
/*
  The structure of the function:
   -It checks to see if width and height are numbers
   -then checks cache for expected resized img, instead of processing, in which case code ends.
   -if not, it checks to see if the img to be resized exists or not
   -then resizes the img and caches it in a local directory, then sends it in a response
   
  Processed images are saved to ProcessedImgs folder inside images folder
*/
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
    } else res1.end("Img doesn't exist");
  } else res1.end("Invalid URL parameters");
}

export { resizeImg };
