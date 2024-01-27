import axios, { Axios } from 'axios'

const UserApi = axios.create({
    baseURL: "http://localhost:3000"
})

export const signupApi = async (signupData) => {
    try {
        let data = await UserApi.post('/signup', signupData);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const loginApi = async (loginData) => {
    try {
        let data = UserApi.post('/login', loginData)
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export const updateApi = async ({ name, email, phone, image, id }) => {
    try {
        const data = new FormData()
        data.append("id", id)
        data.append("name", name)
        data.append("emil", email)
        data.append("phone", phone)
        data.append("image", image)
        const config = {
            header: {
                "content-type": "multipart/form-data",
                userId: id,
            },
            withCredentials: true,
        };
        let resData = UserApi.post('/update', data, config)
        return resData

    } catch (error) {
        console.log(error.message);
    }
}