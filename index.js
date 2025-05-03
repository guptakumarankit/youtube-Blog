const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middleware/authentication');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();
const PORT = 8000;

// register the router
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

// set up the view engine
app.set("view engine" , "ejs");
// set up the views
app.set("path" , path.resolve('./views'));


// middleware 
// we handle form data form frontend then use that 
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

// when we use any localhost:8000/user/anything then we use useRoute.
app.use("/user" , userRoute);
app.use('/blog' , blogRoute);

app.get('/' , async(req , res) => {
     const allBlogs = await Blog.find({});
     res.render("home" ,{
         user:req.user,
         blogs : allBlogs,
     });
})

mongoose.connect("mongodb://localhost:27017/blogify").then( (e) => console.log("MongoDb Connected!"));

app.listen(PORT , () => console.log(`Server Started at PORT: ${PORT}`));
