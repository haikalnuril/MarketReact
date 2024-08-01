import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import {DarkMode} from "../../context/DarkMode";
import {useTotalPrice} from "../../context/TotalPriceContext";

const Navbar = () => {
    const username = useLogin();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { total } = useTotalPrice();

    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => acc + item.qty, 0);
            setTotalCart(sum);
        }
    }, [cart]);


    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
            {username}
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                Item : {totalCart}  |  Total : $ {(total).toLocaleString('us-US', {styles: 'currency', currency: 'USD'})}
            </div>
            <Button classname="ml-4 bg-black" onClick={handleLogout}>logout</Button>
            <button className='absolute left-5 top-4 bg-blue-600 p-2 text-white rounded' onClick = {() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}

export default Navbar;