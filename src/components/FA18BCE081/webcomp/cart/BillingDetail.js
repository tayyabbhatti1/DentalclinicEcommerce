import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbars from "../Dentalnavbar";
import { getForm } from "../../../../Service/api2";

function BillingDetail() {
  const [formData,setformData] = useState([]);

  useEffect(()=>{
    getBillingDetail();
  },[]);

  const getBillingDetail = async ()=>{
    const result = await getForm();
    setformData(result.data);
  }
  return (
    <div>
      <Navbars/>
      <div id="show-div-1">
        {formData.map(details=>(
          <><h1 id="show-h1" className="p-3 mt-5">Billing Data From The Database</h1><ul className="list-group">
            <li className="list-group-item">Email: {details.Email}</li>
            <li className="list-group-item">Full Name: {details.Name}</li>
            <li className="list-group-item">Phone: {details.Phone}</li>
            <li className="list-group-item">Appointment Date: {details.Date}</li>
            <li className="list-group-item">Message: {details.Address}</li>
          </ul></>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
export default BillingDetail;
