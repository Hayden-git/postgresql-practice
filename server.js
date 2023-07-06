

const express = require('express');
const serverApp = express();

serverApp.use(express.static('public'));
serverApp.use(express.urlencoded({extended: true}));
serverApp.use(express.json());

serverApp.set("view engine", "ejs");

const userRouter = require("./routes/users")
serverApp.use("/", userRouter)
serverApp.use("/posts", userRouter)
serverApp.use("/users", userRouter)
// serverApp.use("/addAllUsers", userRouter)

// Start the server
serverApp.listen(8001, () => {
    console.log('Server is listening on port 8001');
});

