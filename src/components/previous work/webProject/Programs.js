import React, { Component } from 'react';
import Programst from './Programst';
import dumbell from '../images/13546.jpg';
import './Programsstyle.css'

class Programs extends Component {
    state = { 
        ProgramsDetail:[
            { id:11, Name: "BASIC PACKAGE", price: 120, feature: "5 Days in a week"},
            { id:12, Name: "PREMIUM PACKAGE", price: 240, feature: "5 Days in a week"},
            { id:13, Name: "DIAMOND PACKAGE", price: 420, feature: "5 Days in a week"},
        ]
     }
     setState = ({
        imageSrc:[
            './Images/bookkaru.png'
        ]
     })
     
    render() { 
        return (
            <div className='statePrograms'>
                { this.state.ProgramsDetail.map(Programs =>(
                    <Programst id={Programs.id} programName={Programs.Name} price={Programs.price}
                    feature={Programs.feature} />
                ))}
            </div>
        );
    }
}
 
export default Programs;