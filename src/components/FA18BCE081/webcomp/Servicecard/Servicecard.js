import React from 'react';
import Card from '../Card';
import Servicedata from './Servicedata';
import '../Card.css'

const Servicecard = () => {
    return (
        <>
            <h1 className='text-center' id='Servicecardh1'>Our Dental Service</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center ' id='Servicecard'>
                    {
                        Servicedata.ServicesDetail.map((item) => {
                            return (
                                <>

                                    <Card
                                        img={item.img}
                                        title={item.title}
                                        title1={item.title1}
                                        desc1={item.desc1}
                                        desc2={item.desc2}
                                        desc3={item.desc3}
                                        desc4={item.desc4}
                                        desc5={item.desc5}
                                        desc6={item.desc6}
                                        desc7={item.desc7}
                                        desc8={item.desc8}
                                    />
                                    


                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Servicecard;