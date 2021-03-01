const path = require("path")

module.exports = {
    components: 'src/module/**/component/**/*.js',
    require: [
        path.join(__dirname, "src/index.css")
    ]
}