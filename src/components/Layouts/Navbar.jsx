import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

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
            <Button classname="ml-4 bg-black" onClick={handleLogout}>logout</Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                {totalCart}
            </div>
        </div>
    );
}

export default Navbar;