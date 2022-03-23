import 'dotenv/config';
import express from 'express';
import routes from './routes/index.routes.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(routes);

export default app;
