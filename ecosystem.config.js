module.exports = {
  apps: [{
    name: "guialook",
    script: "./server.js",
    watch: true,
    env: {
      "PLUGDO_GLOBAL_ENV": "prod",
      "PORT": 6263
    }
  }]
}