import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const Textfield = ({ label, ...props }) => {


    const [field, meta] = useField(props);
    console.log(field, meta);
    return (
        <div>
            <div className='mb-2'>
                <label htmlFor={field.name}>{label}</label>
                <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}
                    autoComplete="off"
                />
                <ErrorMessage component="div" name={field.name} className="error" />
            </div>

            

        </div>

    )
}

