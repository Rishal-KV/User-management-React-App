import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";

  import { useDispatch } from "react-redux";
 
  import { useNavigate } from "react-router-dom";
  import { addUserApi } from "../../Api/AdminApi";
  function AddUser() {
    let navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const [error,setError] = useState('')
    const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  
  
    async function handleSubmit(e){
      e.preventDefault()
      if(name.length < 3){
        return  setError("Name must contain 3 letters")
        }else if(!emailPattern.test(email)){
        return  setError("Invalid email format")
        }else if(password.length < 4){
          return setError("Password must contain 4 character")
        }
      const userData = await addUserApi({name,email,number,password})
      if (userData.status) {
        navigate('/admin/dashboard')
      }
    
    }
  
  
  
  
    return (
      <div className="flex items-center justify-center h-screen bg-white">
  
  
        <Card color="transparent" shadow={false}>
        
          <form  onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                 Name
              </Typography>
              <Input onChange={(e) => setName(e.target.value)}
                size="lg"
                placeholder="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input onChange={(e) => setEmail(e.target.value)}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Number
              </Typography>
              <Input onChange={(e) => setNumber(e.target.value)}
                type="number"
                size="lg"
                placeholder="number"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input onChange={(e) => setPassword(e.target.value)}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
  
            <Button type="submit" className="mt-6" fullWidth>
              Add User
            </Button>
            {error && <span style={{color:"red",justifyContent:"center",alignItems:"center", display:"flex"}}>{error}</span>}
  
            
          </form>
        </Card>
      </div>
    );
  }
  export default AddUser