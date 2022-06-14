import React from "react";
import Itemcart from "./Itemcart";
import Datacart from "./Datacart";
import './Itemcart.css'

const Carthome = () => {

    
    return(
        <>
            <h1 className="text-center mt-3" id="Carthomeh1">All Items</h1>
            <section className="py-4 container-fluid">
                <div className="row justify-content-center" id="productcart">
                    {Datacart.ProductDetail.map((item, index)=> {
                        return(
                            <Itemcart
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            key ={index}
                            />
                        )
                    })}
                   
                   
                </div>

            </section>
        
        </>
    )       
}

export default Carthome;