const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const courseRouter = require("./routes/course.js");

const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

//routes
app.use("/courses", courseRouter);

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// server On
app.listen(port, () => console.log("Server running on port " + port));

