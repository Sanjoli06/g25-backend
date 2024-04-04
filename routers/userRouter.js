import express from 'express';
// object create kra h usercontroller k name se 
import userController from "../controllers/userController.js";

const router=express.Router();

// router.get('/',(req,res)=>{});
// router.post('/',(req,res)=>{});

// same thing as above two lines
router.route('/')
    .get(userController.getUsers)
    .post(userController.creatUser)

export default router;