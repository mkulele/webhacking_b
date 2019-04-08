const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const PORT= process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));

// routes
const indexRoute = require("./routes/index");

// DB연결
//let url =  "mongodb://localhost:27017/dalhav";
let url = 'mongodb://admin:admin123@ds145039.mlab.com:45039/heroku_r4rpz5hv';
mongoose.connect(url, {useNewUrlParser: true});

// 뷰엔진 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));


// use routes
app.use("/", indexRoute);

//listen
app.listen(PORT, function () {
    console.log('Example app listening on port',PORT);
});