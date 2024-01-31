import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './slice/UserSlice'
import logger from "redux-logger";
const Store = configureStore({
    reducer:{
        user:UserSlice
    }
    
})

export default Store
