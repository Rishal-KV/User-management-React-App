import  express from "express";
let app = express()
import userRoute from "./routes/userRoute.js";
import connection from "./config/mongoose.config.js";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
connection()


app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute)



app.listen(3000,() =>{
    console.log("server is running");
})
export default app