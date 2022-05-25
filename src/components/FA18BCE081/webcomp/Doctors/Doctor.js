import React from 'react';
import DoctorD from './DoctorD';
import Doctersdata from './Doctersdata';
import './Doctor.css';



const Doctor = () => {
    
        return (
            <>
            <div style={{height:'650px'}}>
            <div>
                    <h1 className='text-center' id='Doctorh1'>OUR DOCTORS</h1>
                    <p className='text-center' id='Doctorp'>QUALIFIED</p>
                </div>
                <div className='justify-contect-center' id='Doctorcard' >
                
                    <tr>
                        <td style={{display:'flex', }}>
                            {
                                Doctersdata.DoctorDetails.map(Doctor=>(
                                  <DoctorD 
                                    Name = {Doctor.Name} 
                                    descD1 = {Doctor.descriptionD1} 
                                    descD2 = {Doctor.descriptionD2}
                                    img= {Doctor.img}/>
                                ))
                            }
                        </td>
                    </tr>
                       
                    
                </div>
            </div>
                
            </>
            
        );
    }

 
export default Doctor;