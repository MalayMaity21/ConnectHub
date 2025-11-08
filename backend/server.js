import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connect.js';
import userRoutes from './routes/user.js';


dotenv.config();///ksdjn
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

connectDb();
app.get('/', (req, res) => {
  res.send('Welcome to ConnectHub Backend!');
});

// app.get('/health',(req,res)=>{
//   res.status(200).send("API is running fine");
// })

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 