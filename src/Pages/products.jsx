import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1000000,
        image: "/images/shoes.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quas quia ab, ratione aliquid quibusdam commodi quos magni explicabo corrupti impedit fugit nisi eius ullam quod, voluptatum amet sunt placeat.`
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 500000,
        image: "/images/shoes.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quas quia ab.`
    },
    {
        id: 3,
        name: "Sepatu Nice",
        price: 1500000,
        image: "/images/shoes.jpg",
        description: `Ini adalah sepatu dari brand Nice.`
    }
]

const email = localStorage.getItem('email');

const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item)=>{
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };

    const handleAddToCart = (id) => {
        if(cart.find((item) => item.id === id)){
            setCart(
                cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if(cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
                {email}
                <Button classname="ml-4 bg-black" onClick={handleLogout}>logout</Button>
            </div>
            
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap">
                {products.map((product) => {
                    return(
                        <CardProduct key= {product.id}>
                            <CardProduct.Header images={product.image}/>
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCart}
                            />
                        </CardProduct>
                    );
                })}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return(
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp. {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp. {(product.price * item.qty).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}><b>Total Price</b></td>
                                <td><b>Rp. {(totalPrice).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ProductPage;