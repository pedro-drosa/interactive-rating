import app from './app.js';

const APP_PORT = process.env.PORT || process.env.APP_PORT;
const { APP_BASE_URL } = process.env;

app.listen(APP_PORT, () => {
  console.log(`⚡ server is running on ${APP_BASE_URL}:${APP_PORT}`);
});
