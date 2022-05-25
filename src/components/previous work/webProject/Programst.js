import React, { Component } from 'react';
import './Programsstyle.css';
import {
    FaDumbbell
} from 'react-icons/fa'


class Programst extends Component {
    state = {  } 


    render() { 
        return (
            <div className='card'>
                   <card>
                    <FaDumbbell id='dumbell' style={{paddingLeft: '30px'}}/> 
                    <br/>
                    <div className='details' style={{paddingTop: '50px'}}>
                    {this.props.programName} <br/> {this.props.Image}
                    <br/>
                    {this.props.price}
                    <br/>
                    {this.props.feature}

                    </div>
                    </card>
            </div>
        );
    }
}
 
export default Programst;