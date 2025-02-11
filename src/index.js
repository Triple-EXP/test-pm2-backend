import express from 'express';
import { config } from '../config/config.js';

const app = express();

app.get('/', (req, res) => {
  res.send(`App is running in ${process.env.NODE_ENV} mode`)
});

app.get('/helloworld', (req, res) => {
  res.send('hello world!');
})

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
})