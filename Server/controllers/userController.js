import { User } from "../model/userModel.js";
import bcrypt from 'bcrypt'
export const signUp = async(req, res) =>{
    try {
        const{name, email, number, password} = req.body

        let user =await  User.findOne({email : email});
        let hashedPass = await bcrypt.hash(password,10);

        if(!user){
            const newUser = new User({
                name : name,
                email : email,
                number : number,
                password : hashedPass
            })

            const userData = await newUser.save()
        }else{
            res.json({
                alert :"user exist",
                status : false
            })
        }

         
    } catch (error) {
        console.log(error.message);
    }
}