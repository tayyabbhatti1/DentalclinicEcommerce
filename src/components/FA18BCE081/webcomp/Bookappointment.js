import React from 'react';
import {Link} from 'react-router-dom';
import '../webcomp/Bookappointmentstyle.css'

function Bookappointment (){
    return(
        
        <div className='row container-fluid' style={{height:'150px',width:'100.9%', borderBottom:'2px solid white'}}>
            <div className='col-8'>
                <h3 id='p1'>BOOK YOUR APPOINTMENT</h3>
                <h2 id='p2'>DO NOT WAIT MAKE AN APPOINTMENT TODAY!</h2>
            </div>
            <div className='col-4'>
                <Link to="/appointment"><button id='Appointmentbutton' style={{ marginLeft:'60px', border: 'none', background: 'black', width: '250px', height: '70px', color: 'white', fontFamily: 'Poppins',fontSize:'120%', opacity:'80%'  }}>MAKE AN APPOINTMENT</button></Link> 
            </div>
            
            
        </div>
    )
}
 
export default Bookappointment;


   

