import React, { Component } from 'react';
import Productt from './Productt';

class Products extends Component {
    state= {
        productDetail: [
            { id:11, Name: "Watch", Aqty: 0, uPrice: 150 },
            { id:12, Name: "Trouser", Aqty: 15, uPrice: 145 },
            { id:13, Name: "T-shirts", Aqty: 34, uPrice: 130 },
            { id:14, Name: "Shoes", Aqty: 54, uPrice: 104 },
            { id:15, Name: "Earphones", Aqty: 32, uPrice: 115 },
            { id:16, Name: "Sandals", Aqty: 21, uPrice: 120 }
        ]
    };

    handleDelete = (id) => {
        const products = this.state.products.filter(p => p.id != id);
        this.setState({ products });
    };

    render() { 
        return (
            <div>
                {this.state.productDetail.map(products => (
                    <Productt id={products.id} prodName={products.Name} Aquantity={products.Aqty} uPrice={products.uPrice} onDelete={this.handleDelete} />
                ))}
            </div>
        );
    }
}
 
export default Products;

