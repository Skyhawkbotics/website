const fs = require("fs");
const path = require("path");
var mcss = fs.readFileSync(path.join(__dirname, "public/assets/css/main.css"), "utf-8");
var acss = fs.readFileSync(path.join(__dirname, "public/assets/css/app.css"), "utf-8");
var css = mcss + "\n\n\n\n/*  CSSFixer  */" + acss;
fs.writeFileSync(path.join(__dirname, "public/assets/css/main.css"), css);