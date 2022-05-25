import express from "express";
import path from "path";
import fs from "fs";

const port = process.env.PORT || 3030;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/website/*", (req, res) => {
    const p = path.join(__dirname, "public", req.path.replace("/website", ""));
    const p2 = path.join(__dirname, "views", (req.path.replace("/website", "") == "/" ? "index" : req.path.replace("/website", "")) + ".ejs");
    if(fs.existsSync(p) && req.path.replace("/website", "") != "/") {
        res.sendFile(p);
    } else {
        if(req.path == "/website/index.html" || req.path == "/website/index.html.ejs") return res.redirect("/website");
        if(fs.existsSync(p2)) {
            res.render(p2);
        } else {
            res.render(path.join(__dirname, "views/404.ejs"));
        }
    }
});

app.get("/*", (req, res) => {
    var p = req.path;
    if (req.path == "/") {
        p = "/index";
    } else if (req.path == "/index.html" || req.path == "/index.html.ejs") {
        res.redirect("/");
    }
    if (fs.existsSync(path.join(__dirname, "views" + p + ".ejs"))) {
        res.render(path.join(__dirname, "views" + p + ".ejs"));
    } else {
        res.render(path.join(__dirname, "views/404.ejs"));
    }
});

app.listen(port, () => {
    console.log("App listening on port " + port);
});
