import express from "express";
import  {signUp,login,editprofile} from "../controllers/userController.js";
const userRoute = express();
import { upload } from "../Middleware/multerConfig.js"; 

userRoute.post('/signup', signUp)
userRoute.post('/login',login)
userRoute.post('/update',upload.single('image'),editprofile)



export default userRoute