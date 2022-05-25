import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const ValidationSchema = Yup.object().shape({
	name: Yup.string()
		.required("Full Name is required"),
	email: Yup.string()
		.email("Invalid email address format")
		.required("Email is required"),
	password: Yup.number()
		.integer("Password must be 11 characters and not Letters")
		.required("Password is required"),
	gender: Yup.string()
		.required("Select Your Gender"),
	service: Yup.number()
		.required("Select The Product"),
	lastName: Yup.string()
	    .max(12, 'Last name can not be greater than 12')
		.min(8, 'Last name can not be smaller than 8')
		.matches(/(^[A-za-z0-9][\D\W])/, "Only alphanumeric and one symbol are allowed for this field ")

});

class Signup extends React.Component {

	render() {
		return (

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<Formik
							initialValues={{ name: '', email: '', password: '', gender: '', service: '', lastName:'' }}
							validationSchema={ValidationSchema}
							onSubmit={(values) => {
								console.log(values);

							}}
						>
							{({ touched, errors, isSubmitting, values }) =>
								!isSubmitting ? (
									<div>
										<div className="row mb-5">
											<div className="row">
												<div>
													<p id='form-p1'>Sign Up to contact with us!</p>
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
													className={`mt-2 form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
												/>

												<ErrorMessage component="div" name="name" className="invalid-feedback" />
											</div>


											<div className="form-group">

												<Field
													id="input-1"
													type="email"
													name="email"
													placeholder="Enter email"
													autocomplete="off"
													className={`mt-2 form-control ${touched.email && errors.email ? "is-invalid" : ""}`} />

												<ErrorMessage component="div" name="email" className="invalid-feedback" />
											</div>

											<div className="form-group">

												<Field
													id="input-1"
													type="password"
													name="password"
													placeholder="Password"
													className={`mt-2 form-control ${touched.password && errors.password ? "is-invalid" : ""}`} />
												<ErrorMessage component="div" name="phone" className="invalid-feedback" />
											</div>

											<div>
												<p id='form-p3' className={`mt-2 form-control
						${touched.service && errors.service
														? "is-invalid"
														: ""
													}`}>Services:
													<br />
													<Field type="checkbox" name="service" id="age-18" value="1" />
													<label id='l-male' htmlFor="age-18">Service-1</label>
													<Field type="checkbox" name="service" id="not-18" value="2" />
													<label id='l-male' htmlFor="not-18">Service-2</label>
												</p>
												<ErrorMessage
													component="div"
													name="product"
													className="invalid-feedback"
												/>
											</div>


											<div>
												<p id='form-p3' className={`mt-2 form-control
						${touched.gender && errors.gender
														? "is-invalid"
														: ""
													}`}>Gender:
													<br />
													<Field type="radio" name="gender" id="Male" value="male" />
													<label id='l-male' htmlFor="Male">Male</label>
													<Field type="radio" name="gender" id="female" value="female" />
													<label id='l-male' htmlFor="female">Female</label>
												</p>
												<ErrorMessage
													component="div"
													name="gender"
													className="invalid-feedback"
												/>
											</div>

											<div className="form-group " >

												<Field
													id="input-1"
													type="text"
													name="lastName"
													placeholder="Last Name"
													className={`mt-2 form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
												/>

												<ErrorMessage component="div" name="lastName" className="invalid-feedback" />
											</div>


											<button
												id='submit-form'
												type="submit"
												className="btn btn-primary btn-block mt-4"
											>
												Submit
											</button>
										</Form>
									</div>
								) : (
									<div>
										<h1 className="p-3 mt-5"></h1>

										<div className="alert alert-success mt-3">
											Thank for your connecting with us. Here's what we got from
											you !
										</div>
										<ul className="list-group">
											<li className="list-group-item">Email: {values.email}</li>
											<li className="list-group-item">
												Name: {values.name}
											</li>
											<li className="list-group-item">
												Password: {values.password}
											</li>
					
											<li className="list-group-item">
												Gender: {values.gender}
											</li>
											<li className="list-group-item">
												Service: {values.service}
											</li>
											<li className="list-group-item">
												Last Name: {values.lastName}
											</li>
										</ul>
									</div>
								)
							}
						</Formik>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;