import React from 'react';
import Headbar from '../webcomp/Headbar';
import Dentalnavbar from '../webcomp/Dentalnavbar'; 
import Footer from '../webcomp/Footer';
import '../pages/Aboutus.css'
import Bookappointment from '../webcomp/Bookappointment';


const Aboutus =()=>{
return(
    <div>
        <Dentalnavbar/>
        <Headbar name={"ABOUT US"}/>
        <div className='row'>
            <div className='col-6'>
                <h2>Sunburst Dental Journey</h2>
                <p>It gives us great pleasure to introduce you to Dental Experts. It was first established in 2005 at Johar Town, Lahore, Pakistan. It was founded by DR. Sajjad Saeed Siddique who is a renowned dental surgeon and endodontics specialist it was his vision and dream to become the best dentist in Lahore by providing the exceptional oral health treatment. And over the years his dental clinics in Lahore has grown from strength to strength providing a comprehensive range of dental services such as teeth implants, orthodontics ( braces ) and endodontics (rct dental treatment) etc. Now Dental Experts have a best team of dental surgeons and they are considered as one of the best leading dental clinics in Lahore who works under one roof and provides a quality dental treatment.</p>
            </div>
            <div className='col-6'>
                <img src='/Images/logo-02.png' alt=''/>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <img src='/Images/slider_4.jpg' alt=''/>
            </div>
            <div className='col-6'>
                <h2>Our Vision</h2>
                <p>Our goal is to help our patients achieve the most prime oral health in the most economical way possible.We aim to provide high quality dental care in a warm and peaceful manner.We practice the best sterilization protocol to ensure our patients safety.We believe in building relationships based on trust and honesty with our patients.We not only educate our patients regarding their oral health but also make sure they make an informed decision when it comes to their oral health. Dental Experts deals with all the specialties of Dentistry working together in complete harmony. We deal with general dentistry as well as specialized dentistry using Modern approaches of Dentistry.Dental Experts is a place where Humanity comes First and Smiles matter.</p>
            </div>
            
        </div>
        <Bookappointment/>
        <Footer/>
    </div>
    
)
}
export default Aboutus;