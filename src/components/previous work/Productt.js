import React, { Component } from 'react';

export class Productt extends Component {
    state = {}


    render() {
        return (
            <div>
                <table>Product Name: {this.props.prodName} Available Quantity: {this.props.Aquantity} Unit Price: {this.props.uPrice} Operation: <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button> </table>
            </div>
        );
    }
}
export default Productt;