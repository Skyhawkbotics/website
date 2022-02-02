const ucss = require("postcss-uncss");
// const uncss = ucss({
    // html: [
        // "./**/*.ejs"
    // ],
    // ignore: [
        // "./**/*.js"
    // ]
// });

module.exports = {
    plugins: [
        require("tailwindcss"),
        // require("autoprefixer"),
        // uncss
    ]
}