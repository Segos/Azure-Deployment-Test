let path = require('path')
let express = require('express')
let app = express();


let mainRouter = require('./mainRoutes.js');
let classRouter = require('./classRoutes.js');


app.use("/",mainRouter);
app.use("/class",classRouter);


let port = process.env.PORT || 3000;
app.listen(port)

console.log("Express server running on port",port)