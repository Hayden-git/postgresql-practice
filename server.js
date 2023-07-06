

const express = require('express');
const serverApp = express();

serverApp.use(express.static('public'));
serverApp.use(express.urlencoded({extended: true}));
serverApp.use(express.json());

serverApp.set("view engine", "ejs");

const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")

serverApp.use("/", userRouter)
serverApp.use("/posts", postRouter)
serverApp.use("/users", userRouter)
// serverApp.use("/addAllUsers", userRouter)

// Start the server
serverApp.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

