import React from "react";
import { Formik, Form, Field, ErrorMessage,} from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router";



const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Full Name is required"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    phone: Yup.number()
        .integer("Password must be 11 characters and not Letters")
        .required("Phone is required"),
    date: Yup.date()
        .required("Select Appointment Date"),
    message: Yup.string()
        


});

const Forms = () => {
    const navigate = useNavigate();
    
    return (
        <>
        
        <div className="container-fluid" style={{marginTop:'40px', marginBottom:'40px'}}>
            
            <div className="row">
                <div className="col-lg-12">
                    <Formik

                        initialValues={{ name: "", email: "", phone: "", date: "", message: "" }}
                        validationSchema={ValidationSchema}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 100));
                            console.log(values);
                            navigate("/FormDetail", { state: values });
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) =>
                            !isSubmitting ? (
                                <div>
                                    <div className="row mb-5">
                                        <div className="row">
                                            <div>
                                                <p id='form-p1' style={{ fontFamily: 'Poppins', color: 'white', marginTop: '70px', fontWeight: 'bold', fontSize: '25px', wordSpacing: '1px', paddingLeft: '50px', paddingRight: '50px' }}>WE ARE HERE FOR YOU</p>
                                                <p id='form-p2' style={{ fontFamily: 'Poppins', color: 'white', fontWeight: 'bold', fontSize: '40px', wordSpacing: '1px', paddingLeft: '50px', paddingRight: '50px' }}>MAKE AN APPOINTMENT</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Form>
                                        <div className="form-group " >

                                            <Field
                                                id="input-1"
                                                type="text"
                                                name="name"
                                                placeholder="Full Name"
                                                className={`mt-2 form-control
						${touched.name && errors.name ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="name"
                                                className="invalid-feedback"
                                            />
                                        </div>


                                        <div className="form-group">

                                            <Field
                                                id="input-1"
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                autocomplete="off"
                                                className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback"
                                            />
                                        </div>


                                        <div className="form-group">

                                            <Field
                                                id="input-1"
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                className={`mt-2 form-control
						${touched.phone && errors.phone
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="phone"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">

                                            <Field
                                                id="input-1"
                                                type="date"
                                                name="date"
                                                className={`mt-2 form-control
                                                    ${touched.date && errors.date
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="date"
                                                className="invalid-feedback"
                                            />
                                        </div>





                                        
                                        <div className="form-group " >
                                            
                                            <Field
                                                id="input-1"
                                                type="text"
                                                name="message"
                                                placeholder="Message"
                                                className={`mt-2 form-control
${touched.message && errors.message ? "is-invalid" : ""}`}
                                                
/>
                                            
                                            

                                            <ErrorMessage
                                                component="div"
                                                name="message"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <button
                                            id='submit-form'
                                            type="submit"
                                            className="btn btn-primary btn-block mt-4 form-control"
                                        >
                                            Submit
                                        </button>
                                    </Form>
                                        <button
                                            id='submit-form'
                                            type="submit"
                                            className="btn btn-primary btn-block mt-4 form-control"
                                        >
                                            View Patient
                                        </button>
                                 </div>
                            ) : (
                                <div>
                                    <h1 className="p-3 mt-5">Query Sent</h1>

                                    <div className="alert alert-success mt-3">
                                        Thank for your connecting with us. Here's what we got from
                                        you !
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item">Email: {values.email}</li>
                                        <li className="list-group-item">
                                            Full Name: {values.name}
                                        </li>
                                        <li className="list-group-item">
                                            Phone: {values.phone}
                                        </li>
                                    
                                        <li className="list-group-item">
                                            Appointmentdate: {values.Appointmentdate}
                                        </li>
                                        <li className="list-group-item">
                                            message: {values.message}
                                        </li>
                                        
                                    </ul>

                                </div>

                            )
                        }
                    </Formik>
                </div>

            </div>
        </div>
        
        </>
    );
}

export default Forms;
