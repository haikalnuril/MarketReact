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

const ProductPage = () => {

    return (
        <div className="flex justify-center py-5">
            {products.map((product) => {
                return(
                    <CardProduct>
                        <CardProduct.Header images={product.image}/>
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                    );
            })}
        </div>
    );
};

export default ProductPage;