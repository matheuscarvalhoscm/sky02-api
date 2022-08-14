const cors = require('cors');
import express from 'express';
import router from './routes/address';

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());
app.use('/address', router);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
