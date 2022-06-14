import React from 'react';
import Dentalnavbar from '../webcomp/Dentalnavbar';
import Headbar from '../webcomp/Headbar';
import Footer from '../webcomp/Footer';
import video from '../pages/2.mp4'


const Educationalvideos =()=>{
    return(
        <div>
            <Dentalnavbar/>
            <Headbar name={"EDUCATIONAL VIDEOS"}/>
            <video autoPlay loop className='container-fluid' style={{marginTop:'10px'}}>
                <source src={video} type='video/mp4'/>
            </video>
            <Footer/>
        </div>
        
    )
    }
    export default Educationalvideos;