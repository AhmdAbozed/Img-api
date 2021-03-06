var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import fs, { existsSync } from "fs";
import sharp from "sharp";
/*
  The structure of the function:
   -It checks to see if width and height are numbers
   -then checks cache for expected resized img, instead of processing, in which case code ends.
   -if not, it checks to see if the img to be resized exists or not
   -then resizes the img and caches it in a local directory, then sends it in a response
   
  Processed images are saved to ProcessedImgs folder inside images folder
*/
function resizeImg(source, x, y, req1, res1) {
    return __awaiter(this, void 0, void 0, function () {
        var resize, img;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(Number(x) && Number(y))) return [3 /*break*/, 7];
                    if (!existsSync("./images/processedImgs/".concat(source).concat(x, "-").concat(y, ".jpg"))) return [3 /*break*/, 1];
                    console.log("already exists!");
                    fs.readFile("./images/processedImgs/".concat(source).concat(x, "-").concat(y, ".jpg"), function (err, img) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (err)
                                throw err;
                            res1.end(img);
                            return [2 /*return*/];
                        });
                    }); });
                    return [3 /*break*/, 6];
                case 1:
                    if (!existsSync("./images/".concat(source, ".jpg"))) return [3 /*break*/, 5];
                    return [4 /*yield*/, sharp("./images/".concat(source, ".jpg")).resize(Number(x), Number(y))];
                case 2:
                    resize = _a.sent();
                    return [4 /*yield*/, resize.toFile("./images/processedImgs/".concat(source).concat(x, "-").concat(y, ".jpg"))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, resize.toBuffer()];
                case 4:
                    img = _a.sent();
                    res1.writeHead(200, { "Content-Type": "image/jpeg" });
                    res1.end(img);
                    return [3 /*break*/, 6];
                case 5:
                    res1.end("Img doesn't exist");
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    res1.end("Invalid URL parameters");
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
export { resizeImg };
