import React from "react";
import './Cart.css';
import Submitform from '../Submitform';
import { useCart } from "react-use-cart";
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className="text-center" id="carth1">Your Cart is Empty.</h1>

    return (
        <section className="py-4 container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5 id="carth5">Cart ({totalUniqueItems}) <br/> Total Items:({totalItems})</h5>
                    <table className="table table-light table-hover n-8">
                        <tbody>
                            {
                                items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{ height: "200px", width: '300px' }} />
                                            </td>
                                            <td id="cartdata">{item.title}</td>
                                            <td id="cartdata">${item.price}</td>
                                            <td id="cartdata">Quantity ({item.quantity})</td>
                        
                                            <td>
                                                <button className="btn btn-info ms-2"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                >-</button>
                                                <button className="btn btn-info ms-2"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                >+</button>
                                                <button className="btn btn-danger ms-2"
                                                    onClick={() => removeItem(item.id)}

                                                >Remove Item</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="col-auto ms-auto">
                        <h2>Total Price: $ {cartTotal}</h2>
                    </div>
                    <div className="row">
                    <div className="col-auto">
                            <button className="btn btn-success m-2"
                            onClick={cartTotal}
                            >
                            Buy Item
                            </button>
                    </div>
                    <div className="col-auto">
                            <button className="btn btn-danger m-2"
                            onClick={emptyCart}
                            >
                            Clear Cart
                            </button>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Cart;