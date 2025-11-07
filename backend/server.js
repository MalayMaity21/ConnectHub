const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to ConnectHub Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 