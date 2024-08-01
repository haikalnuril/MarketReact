import { useEffect, useContext, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import {DarkMode} from "../context/DarkMode";



const ProductPage = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [products, setProducts] = useState([]);
    useLogin();


    
    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);
    
    return (
        <>
            <Navbar/>
            <div className={`flex justify-center py-5 px-5 ${isDarkMode && "bg-slate-900 text-white"}`}>

                <div className="w-4/6 flex flex-wrap">
                {products.length>0 &&
                products.map((product) => {
                    return(
                        <CardProduct key= {product.id}>
                            <CardProduct.Header images={product.image} id={product.id}/>
                            <CardProduct.Body name={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                            />
                        </CardProduct>
                    );
                })}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <TableCart products={products}/>
                </div>
            </div>
        </>
    );
};

export default ProductPage;