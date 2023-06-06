import express from 'express';

export const app = express();


// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'We’ve been the UK’s #1 clinic four years in a row and we’re no #1 for the hair transplant, too.' });
});

// Version the api
app.use('/api/v1', api);
