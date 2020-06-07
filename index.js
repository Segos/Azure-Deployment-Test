let path = require('path')
let express = require('express')
let app = express();

let bodyParser = require('body-parser');

let mainRouter = require('./mainRoutes.js');
let classRouter = require('./classRoutes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/",mainRouter);
app.use("/class",classRouter);


let port = process.env.PORT || 3000;
app.listen(port)

console.log("Express server running on port",port)