import { useParams } from "react-router-dom";
import {useState, useEffect } from "react";
import products from "../../data/Products"
import {BsFillStarFill, BsStarHalf, BsStar, BsFillCartCheckFill} from "react-icons/bs";

export default function ProductDetail () {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        for(let i=0; i<products.length; i++){
            if(products[i].id == productId){
                setProduct({product: products[i]})
            }
        }
    }, [productId]);

    const prod = product.product;

    console.log(prod)
    
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-6">
                    <img id="pDetail" src={prod?.img} alt="img" />
                </div>

                <div className="col-md-6">
                    <h1 className="mt-5 text-danger fw-bold">{prod?.name}</h1>
                    <div className="fs-4">
                        <p>{prod?.description}</p>
                        <p className="fw-bold">Price: <span className="text-danger ">{prod?.price}€</span></p>
                        <div>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsStarHalf className="fs-3 text-warning"/>
                            <BsStar className="fs-3 text-warning" />
                        </div>
                        <p className="mt-3"><span className="fw-bold">Category:</span> {prod?.productCategory.name}</p>
                        <p><span className="fw-bold">Left:</span> {prod?.soldout}</p>
                        <button className='btn btn-light border fs-4' onClick={()=> this.props.addProduct(this.props.product, this.state.quantity)}>Add <BsFillCartCheckFill/></button> 
                   </div>
                </div>
            </div>
        </div>
    );
}