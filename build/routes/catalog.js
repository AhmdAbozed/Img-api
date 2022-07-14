import express from "express";
var routes = express.Router();
routes.get('/home', function (req, res) {
    res.send("<div style = 'color: red'>hello</div>");
});
export { routes };
