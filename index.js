const path = require('path');
const express = require('express');

const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

// register the router
const userRoute = require('./routes/user')

// set up the view engine
app.set("view engine" , "ejs");
// set up the views
app.set("path" , path.resolve('./views'));

app.get('/' , (req , res) => {
     res.render("home")
})

// middleware 
// we handle form data form frontend then use that 
app.use(express.urlencoded({extended : false}));

// when we use any localhost:8000/user/anything then we use useRoute.
app.use("/user" , userRoute);

mongoose.connect("mongodb://localhost:27017/blogify").then( (e) => console.log("MongoDb Connected!"));

app.listen(PORT , () => console.log(`Server Started at PORT: ${PORT}`));
