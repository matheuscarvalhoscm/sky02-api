import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (_req, res) => {
  return res.status(200).send('IT WORKED!')!
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
