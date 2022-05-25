import React from 'react';
import { useNavigate } from "react-router-dom";

const DoctorD = (props) => {

    const navigate = useNavigate();

    const handleView = (props)=>{
        navigate("/Home/Doctor-detail", {state: props});
    }; 

    return(
        
        <>
            <div className="Card col-11 col-md-6 col-lg-3 mx-0 mb-4" id="Doctorcard">
                <div className="card p-0 overflow-hidden h-100 shadow" id="Servicecard1">
                    <img src={props.img} className="card-img-top img-fluid " style={{height:'200px'}} alt='' />
                    <div className="Card-body text-center" id="Servicecardbody">
                        <h5 className="Card-title" id="Servicecardh5">{props.Name}</h5>
                        <p className="Card-description text-center">{props.descD1}</p>
                        <button className="btn btn-success"  onClick={()=>handleView(props)}>See more about doctor</button>
                    </div>
            </div>
            </div>

        
        </>
    )
}
export default DoctorD;