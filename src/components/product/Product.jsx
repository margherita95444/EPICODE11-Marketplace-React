import React from "react";
import {BsFillStarFill, BsStarHalf, BsStar, BsArrowUpCircle,BsArrowDownCircle, BsFillCartCheckFill } from "react-icons/bs";

export default class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.product.quantity
        }
       
    }

    addQnt = () =>{
        if(this.state.quantity<this.props.product.soldout){ //SOLDOUT
            this.setState({ quantity: this.state.quantity + 1 });
        }
    }

    subQnt = () =>{
        if(this.state.quantity >= 1) //MIN = 0
        this.setState({ quantity: this.state.quantity - 1 });
    }

    render() {
       
        return(
            <div className=" m-5 col">  
                <div className="card shadow p-3 mb-5 bg-body">
                    {this.state.quantity === this.props.product.soldout && <div className="card shadow p-3 mb-5 sold-out">SOLD OUT</div>} 
                    <img src={this.props.product.img} className="card-img-top card-img" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">{this.props.product.name}</h2>
                        <p className="card-text">{this.props.product.description}</p>
                        <div className="d-flex justify-content-between">   
                            <h6 className="text-">{this.props.product.productCategory.name.toUpperCase()}</h6>
                            <h4 className="d.inline text-danger"> {this.props.product.price}€ </h4>
                        </div>
                        
                        <p>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsStarHalf className="fs-3 text-warning"/>
                            <BsStar className="fs-3 text-warning" />
                        </p>
                        <div >
                            <div className="d-inline">
                                <span className="fs-5">Quantity:</span>
                                <span className="fs-2"> {this.state.quantity} </span>
                            </div>
                            <div className='text-end d-inline'>
                                <BsArrowUpCircle type="submit" className="fs-2 ms-3" onClick={this.addQnt}/>
                                <BsArrowDownCircle type="submit" className="fs-2 ms-3" onClick={this.subQnt}/>
                            </div>
                        </div>

                        <div className='text-center mt-3'>                                
                            <button className='btn btn-primary ms-3 fs-4' onClick={()=> this.props.addProduct(this.props.product, this.state.quantity)}>Add <BsFillCartCheckFill/></button> 
                        </div>
                    </div>
                </div>    
            </div>
        ) 
    }
}

