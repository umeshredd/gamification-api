const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
var shell = require('shelljs');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
const PORT = process.env.PORT || 1200;

// HANDLE CORS
app.use((req, res, next) => {
  // req.header("Access-Control-Allow-Origin", "*");
  // // req.header('Access-Control-Allow-Headers', 'Origin, X-Requsted-With, Content-Type')
  // req.header("Access-Control-Allow-Headers", "*");

  // if (req.method === "OPTIONS") {
  //   req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  //   return res.status(200).json({});
  // }
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

build = () => {
  return shell.exec('sh first.sh').stdout
}


//@router test
app.get("/", (req, res) => {
  let value = build()
  res.json({
    greet: value
  })
});

app.get("/enablelike", (req, res) => {
  let value = build()
  res.json({
    greet: value
  })
});

app.get("/disablelike", (req, res) => {
  setTimeout(() => {
    res.json({
      greet: "hello"
    });
  }, 200);
});

app.get("/enableecomment", (req, res) =>
  res.json({
    greet: "hello"
  })
);

app.get("/disablecomment", (req, res) =>
  res.json({
    greet: "hello"
  })
);
app.listen(PORT, () => {
  console.log("Server is running at port", +PORT);
});
