import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = (props) => {
    return (
        <form action="">
            <InputForm 
                label="Fullname" 
                type="text" 
                placeholder="Insert your fullname here..." 
                name="fullname"
            />
            <InputForm 
                label="Email" 
                type="email" 
                placeholder="example@mail.com" 
                name="email"
            />
            <InputForm 
                label="Password"
                type="password"
                placeholder="********" 
                name="password"
            />
            <InputForm 
                label="Confirm Password"
                type="password"
                placeholder="********" 
                name="confirmpassword"
            />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister;