import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
            {children}
        </div>
    )
};

const Header = (props) => {
    const {images, id} = props;
    return (
        <Link to={`/product/${id}`}>
            <img src={images} alt="product" className="p-8 rounded-t-lg h-60 w-96 object-cover"/>
        </Link>
    )
}

const Body = (props) => {
    const {children, name} = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0,30)}...</h5>
                <p className="text-s text-white">
                    {children.substring(0,200)}...
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const { price, id } = props;
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">$ {price.toLocaleString('us-US', {styles: 'currency', currency: 'USD'})}</span>
            <Button classname="bg-blue-600" onClick={() => dispatch(addToCart({id,qty:1}))}>Add to Cart</Button>
        </div>  
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;