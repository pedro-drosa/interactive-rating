import app from './app.js';

const { APP_PORT } = process.env;
const { APP_BASE_URL } = process.env;

app.listen('5000', () => {
  console.log(`⚡ server is running on ${APP_BASE_URL}:${APP_PORT}`);
});
