import express from "express"

const catalog = express.Router();

catalog.get('/home',(req,res)=>{
    res.send("<div style = 'color: red'>hello</div>");
})

export {catalog}