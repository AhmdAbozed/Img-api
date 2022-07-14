import express from "express"
import bodyParser from "body-parser" 
import {catalog} from "./Routes/catalog.js"
const app = express();
const port = 3000;

app.listen(port, ()=>{
  console.log("listening on 3000")
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'website'))); //requires path

app.use("/",catalog);






function add5(x: number): number {
  console.log(x + 5);
  return x + 5;
}
add5(5);

export { add5 };
