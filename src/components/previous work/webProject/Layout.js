import { Outlet, Link } from "react-router-dom";
import './Layputstyle.css'

const Layout = () => {
    return (
        <>
            <nav>
                <div className="row" >

                    <div className="col-4" id="logo-name" style={{}}>
                        <h1>Fitness Freak</h1>
                    </div>
                    <div className="col-6">
                    <div className="menu">
                    <ul>
                        <li >
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                    
                        <li>
                            <Link to="/Contactus">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/Carousel">New Component</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-2">
                        <ul>
                        <li>
                            <Link to="/Register"><button>Register</button></Link>
                        </li>
                        </ul>
                        
                    </div>


                </div>


            </nav>

            <Outlet />
        </>
    )
};

export default Layout;