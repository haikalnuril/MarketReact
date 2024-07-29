import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp. 1.000.000",
        image: "/images/shoes.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quas quia ab, ratione aliquid quibusdam commodi quos magni explicabo corrupti impedit fugit nisi eius ullam quod, voluptatum amet sunt placeat.`
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp. 500.000",
        image: "/images/shoes.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quas quia ab.`
    },
    {
        id: 3,
        name: "Sepatu Nice",
        price: "Rp. 1.500.000",
        image: "/images/shoes.jpg",
        description: `Ini adalah sepatu dari brand Nice.`
    }
]

const email = localStorage.getItem('email');

const ProductPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }

    return (
        <>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-4 bg-black" onClick={handleLogout}>logout</Button>
            </div>
            
            <div className="flex justify-center py-5">
                {products.map((product) => {
                    return(
                        <CardProduct key= {product.id}>
                            <CardProduct.Header images={product.image}/>
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} />
                        </CardProduct>
                        );
                })}
            </div>
        </>
    );
};

export default ProductPage;