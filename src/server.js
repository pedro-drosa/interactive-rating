import app from './app.js';

const APP_PORT = 5000;
const APP_BASE_URL = 'http://localhost';

app.listen('5000', () => {
  console.log(`⚡ server is running on ${APP_BASE_URL}:${APP_PORT}`);
});
