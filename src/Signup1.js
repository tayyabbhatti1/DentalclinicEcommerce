import React from 'react';
import { Formik } from 'formik';
// import logopic from '../images/Logo1.png'

const Signup = () => (
  <div>
    {/* <img id='Fitnessfreak' src={logopic}/> */}
    <h1>Sign Up</h1>
    <Formik
      initialValues={{ Name:'', email: '', gender:'', age: '', checkbox:'false', password: '' }}
      validate={values => {
        const errors = {};

        if (!values.Name) {
            errors.Name = 'Name required';
          } else if (
            !/^[A-Z]{2,}/i.test(values.Name)
          ) {
            errors.Name = 'Invalid Name. Must not contain numbers';
          }

        if (!values.email) {
          errors.email = 'Email required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        
        // if (!values.gender) {
        //   errors.gender = 'this field required';
        // } else if (
        //     errors.gender = 'Fill this up'
        // )

        if (!values.age) {
          errors.age = 'age required';
        } else if (
          !/^[5-70]/i.test(values.age)
        ) {
          errors.age = 'Age must be between 5-70';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
            type="text"
            name="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Name}
            style={{display:'grid'}}
          />
          {errors.Name && touched.Name && errors.Name}

          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            style={{display:'grid'}}
          />
          {errors.email && touched.email && errors.email}

          <label>Gender</label>
          <br/>
          <label style={{marginRight:'10px'}}>Male</label>
          <input
            type="radio"
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
            style={{marginRight:'10px'}}
          />
          <label  style={{marginRight:'10px'}}>Female</label>
          <input
            type="radio"
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
            style={{marginRight:'10px'}}
          />
          {errors.gender && touched.gender && errors.gender}
          <br/>
          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            style={{display:'grid'}}
          />
          {errors.age && touched.age && errors.age}

          <br/>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            style={{display:'grid'}}
             
          />
          {errors.password && touched.password && errors.password}
          <br/>
          <label>Agree</label>
          <input
            type="checkbox"
            name="agree"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.checkbox}
            
             
          />
          {errors.agree && touched.agree && errors.agree}

          
          <button type="submit" disabled={isSubmitting} style={{display:'grid' , marginRight:'10px'}}> 
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Signup;