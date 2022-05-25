const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");

const regex = new RegExp(/\<\%.+?include\(\"(.+)\"\).+?\%\>/gim);
const viewsPath = path.join(__dirname, "..", "views");
const outPath = path.join(__dirname, "..", "out");
const publicPath = path.join(__dirname, "..", "public");

console.log("Scanning files...");

if (!fs.existsSync(viewsPath) || !fs.lstatSync(viewsPath).isDirectory()) {
    console.log("Views folder does not exist!");
    return;
}

const files_ = fs.readdirSync(viewsPath);
const folders = [];
var files = [];

if (!fs.existsSync(outPath)) fs.mkdirSync(outPath);

for (var i = 0; i < files_.length; i++) {
    if (fs.lstatSync(path.join(viewsPath, files_[i])).isDirectory()) {
        folders.push(path.join(viewsPath, files_[i]));
    } else {
        files.push(path.join(viewsPath, files_[i]));
    }
}

console.log(
    "\x1b[42m\x1b[30m INFO \x1b[0m\x1b[1m\x1b[33m Starting compilation...\x1b[0m"
);

for (var i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(
        `\x1b[42m\x1b[30m INFO \x1b[0m\x1b[1m\x1b[36m Compiling ${file}...\x1b[0m`
    );
    var content = fs.readFileSync(file, { encoding: "utf-8" }).toString();
    var match = regex.exec(content);
    while (match != null) {
        const matchedFile = path.join(
            viewsPath,
            match[1] + (match[1].endsWith(".ejs") ? "" : ".ejs")
        );
        console.log(
            `\x1b[42m\x1b[30m INFO \x1b[0m\x1b[1m\x1b[35m >> Found matched partial ${matchedFile}!\x1b[0m`
        );
        if (!fs.existsSync(matchedFile)) {
            console.log(
                `\x1b[41m\x1b[30m ERROR \x1b[0m\x1b[1m\x1b[35m >> Matched partial ${matchedFile}'s file doesn't exist!\x1b[0m`
            );
            continue;
        }
        content = content.replace(
            match[0],
            fs.readFileSync(matchedFile).toString()
        );
        match = regex.exec(content);
    }
    fs.writeFileSync(
        path.join(
            outPath,
            files[i].replace(viewsPath, "").replace(".ejs", ".html")
        ),
        content
    );
}

console.log(
    "\x1b[42m\x1b[30m INFO \x1b[0m\x1b[1m\x1b[36m Copying assets...\x1b[0m"
);

if (fs.existsSync(publicPath)) {
    const publicFiles = fs.readdirSync(publicPath);
    for (var i = 0; i < publicFiles.length; i++) {
        const file = path.join(publicPath, publicFiles[i]);
        const targetFile = path.join(outPath, publicFiles[i]);
        fse.copySync(file, targetFile);
    }
}

console.log("\x1b[42m\x1b[30m INFO \x1b[0m\x1b[1m\x1b[33m Done!\x1b[0m");
