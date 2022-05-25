import React from "react";
import '../webcomp/Card.css'
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();

    const handleView = (props)=>{
        navigate("/Services/Service-detail", {state: props});
    };

    return (
        <>
            <div className="Card col-11 col-md-6 col-lg-4 mx-0 mb-4" id="Servicecard">
                <div className="card p-0 overflow-hidden h-100 shadow" id="Servicecard1">
                    <img src={props.img} className="card-img-top img-fluid " style={{height:'150px'}} alt='' />
                    <div className="Card-body text-center" id="Servicecardbody">
                        <h5 className="Card-title" id="Servicecardh5">{props.title}</h5>
                        <p className="Card-description text-center">{props.desc1}</p>
                        <button className="btn btn-success" onClick={()=>handleView(props)}>View More</button>
                    </div>
                </div>


            </div>
        </>

    )

}
export default Card;