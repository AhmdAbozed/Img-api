import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes/catalog";
var app = express();
var port = 3000;
app.listen(port, function () {
    console.log("listening on 3000");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'website'))); //requires path
app.use("/", routes);
function add5(x) {
    console.log(x + 5);
    return x + 5;
}
add5(5);
export { add5 };
