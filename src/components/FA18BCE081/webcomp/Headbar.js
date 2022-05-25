import React from 'react';
import '../webcomp/Headbar.css'


const Headbar = (props) => {

    return(
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12' id='col-12img'>
                        <img src={props.img} alt=''/>
                        <h1 id='h1'>{props.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Headbar;