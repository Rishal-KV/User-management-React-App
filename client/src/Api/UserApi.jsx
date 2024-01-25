import axios, { Axios } from 'axios'

const UserApi = axios.create({
    baseURL : "http://localhost:3000"
})

export const signupApi = async(signupData) => {
    try {
         let data = await UserApi.post('/signup', signupData);
         return data;
    } catch (error) {
        console.log(error.message);
    }
}