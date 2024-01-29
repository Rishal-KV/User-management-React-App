import express from 'express'
 const adminRoute = express();
 import { upload } from '../Middleware/multerConfig.js';
import { loadDetails, loginAdmin,updateDetails,userDetails, deleteUser, addUser } from '../controllers/adminController.js'
adminRoute.post('/login',loginAdmin)
adminRoute.get('/userdetails', userDetails)
adminRoute.post('/loaddetails',loadDetails)
adminRoute.post('/updateuser',upload.single('image'),updateDetails)
adminRoute.post('/delete',deleteUser)
adminRoute.post('/adduser',addUser)
export default adminRoute