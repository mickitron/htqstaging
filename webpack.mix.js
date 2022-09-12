let mix = require('laravel-mix');

mix.js("src/js/app.js", "web/dist/js")
    .postCss("src/css/app.css", "web/dist/css", [
        require("tailwindcss"),
    ]);