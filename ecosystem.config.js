module.exports = {
  apps: [
    {
      name: "waqt-server",
      script: "./server.js",
      instances: "1",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "waqt-cdn",
      script: "./cdn/server.js",
      instances: "1",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
