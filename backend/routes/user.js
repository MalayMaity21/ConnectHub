// import signUp from '../controllers/user.js';
// import express from "express";

// const router = express.Router();

// router.post('/signup',signUp);

// export default router;


// ...existing code...
import signUp from '../controllers/user.js';
import express from "express";
import { getAllUsers } from '../controllers/user.js';

const router = express.Router();

// router.post('/', signUp);        // accept POST /users
router.post('/signup', signUp);  // keep existing POST /users/signup
router.get('/', getAllUsers); // accept GET /users to get all users

export default router;