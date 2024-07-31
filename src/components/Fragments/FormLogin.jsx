import { useEffect, useRef, useState } from "react";
import RegisterPage from "../../Pages/register";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
    const handlelogin = (e) =>{
        event.preventDefault();
        // localStorage.setItem('email', event.target.email.value);
        // localStorage.setItem('password', event.target.password.value);
        // console.log("Login Button Clicked")
        // window.location.href = '/products';
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        };
        login(data, (status, res)=> {
            if(status){
                localStorage.setItem('token', res);
                window.location.href = '/products';
            } else {
                setLoginFailed(res.response.data);
            }
        });
    }

    const usernameRef = useRef(null);

    useEffect(()=>{
        usernameRef.current.focus();
    }, []);

    return (
        <form onSubmit={handlelogin}>
            {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
            <InputForm 
                label="Username" 
                type="text" 
                placeholder="Your username" 
                name="username"
                ref={usernameRef}
            />
            <InputForm 
                label="Password"
                type="password"
                placeholder="********" 
                name="password"
            />
            <Button classname="bg-blue-600 w-full" type="submit">
                Login
            </Button>
        </form>
    )
}

export default FormLogin;