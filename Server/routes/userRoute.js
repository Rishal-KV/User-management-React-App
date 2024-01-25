import express from "express";
import  {signUp} from "../controllers/userController.js";
const userRoute = express();


userRoute.post('/signup', signUp)



export default userRoute