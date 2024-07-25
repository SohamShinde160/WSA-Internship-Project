import React from 'react';
import {LiaRupeeSignSolid} from "react-icons/lia"

const FoodItem = () => {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className="card p-3 rounded">
            <img src="https://b.zmtcdn.com/data/pictures/chains/3/1600033/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|750:500&crop=750:500;*,*" alt="" 
            className="card-img-top mx-auto" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Veg Pizza</h5>
                <p className="fooditem_des">Crunchy and cheese veg loaded pizza served with happiness</p>
                <p className="card-text">
                    <LiaRupeeSignSolid/> 150
                    <br />
                </p>
                <button type='button' id="cart_btn" className='btn btn-primary d-inline ml-4'>Add to Cart</button>
                <br />
                <p>
                    Status:<span id='stock_status' className={10>5 ? "greenColor" : "redColor"}>
                        {
                            10> 5 ?(   "In Stock") :("Out Of Stock")
                        }
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem