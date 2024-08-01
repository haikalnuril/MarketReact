import {React, useContext } from 'react';
import { useLogin } from '../hooks/useLogin';
import Navbar from '../components/Layouts/Navbar';
import {DarkMode} from "../context/DarkMode";

const ProfilePage = () => {
    const username = useLogin();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    return (
        <>
        <Navbar/>
        <div className={`flex flex-col min-w-full min-h-screen items-center justify-center py-5 px-5 ${isDarkMode && "bg-slate-900 text-white"}`}>
            <h1>Profile</h1>
            Username : {username}
        </div>
        </>
    )
}

export default ProfilePage;