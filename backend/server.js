import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connect.js';
import userRoutes from './routes/user.js';
import cors from "cors";

dotenv.config();///ksdjn
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',  // your React app
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

connectDb();
app.get('/', (req, res) => {
  res.send('Welcome to ConnectHub Backend!');
});

app.get('/api', (req, res) => {
  res.send('Welcome to ConnectHub Backend!/api');
});

app.get('/api/user', (req, res) => {
  res.send('Welcome to ConnectHub Backend! user');
});

// app.get('/health',(req,res)=>{
//   res.status(200).send("API is running fine");
// })

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 