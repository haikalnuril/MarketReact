import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';

const AuthLayout = (props) => {
    const {children, title, type} = props;
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    {
        console.log(isDarkMode);
    }
    return (
        <div className={`flex justify-center items-center min-h-screen ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-full max-w-xs">
            <button className='absolute left-2 top-2 bg-blue-600 p-2 text-white rounded' onClick = {() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          <h1 className="text-4xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, PLease enter your details
          </p>
          {children}
            <p 
                className="text-sm mt-5 text-center"
            >
                {type === "login" ? "Don't have an account? " : "Already have an account? "}
                
                {type === "login" &&(
                    <Link 
                        to="/register" 
                        className="font-bold text-blue-600"
                    >
                        Sign Up
                    </Link>
                )}
                {type === "register" &&(
                    <Link 
                        to="/login" 
                        className="font-bold text-blue-600"
                    >
                        Sign In
                    </Link>
                )}
            </p>
        </div>
      </div>
    )
}

export default AuthLayout;