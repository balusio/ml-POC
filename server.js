require('@babel/register')({
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
})
require.extensions['.scss'] = () => {};
require.extensions['.png'] = () => {};
// Import the rest of our application.
module.exports = require('./src/server.js')