import React from 'react';


const LoginForm = () => {

    return(
        <div className='col-md-6 position-absolute start-50 translate-middle-x mt-5'>
            <form>
                <label className='mb-2 justify-text-center'>Login </label>
                <input
                    type='text'
                    className='form-control mb-3'
                    name='name'
                    placeholder='User name'
                />
               
                <input
                    type='email'
                    className='form-control mb-3'
                    name='name'
                    placeholder='User name'
                />
                <input
                    type='password'
                    className='form-control mb-3'
                    name='password'
                    placeholder='Password'
                />
                <button className='btn btn-primary form-control'>Login</button>
            </form>

        </div>

    )

}
export default LoginForm;