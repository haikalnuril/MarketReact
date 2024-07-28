import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {

    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header images="/images/shoes.jpg"/>
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quas quia ab, ratione aliquid quibusdam commodi quos magni explicabo corrupti impedit fugit nisi eius ullam quod, voluptatum amet sunt placeat.
                </CardProduct.Body>
                <CardProduct.Footer
                price = "Rp. 1.000.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header images="/images/shoes.jpg"/>
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quas quia ab, ratione aliquid quibusdam commodi quos magni explicabo corrupti impedit fugit nisi eius ullam quod, voluptatum amet sunt placeat.
                </CardProduct.Body>
                <CardProduct.Footer
                price = "Rp. 1.000.000" />
            </CardProduct>
        </div>
    );
}

export default ProductPage;