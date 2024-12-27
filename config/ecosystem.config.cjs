module.exports = {
  apps: [
    {
      name: 'app-dev',
      script: './src/index.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8000
      }
    }
  ]
}