import './Papularroutes.css'
function Popularroutes() {
    return (

        <div>
            <p id="p-1">Popular Routes</p>
            <p id='p-2'>Search Hotels, Flights, Trains & Bus
            </p>
            <p id='p-3'>BUS</p>
            <div className="container">
                <div className="row">
                    <div id='col-1' className="col-6">
                        <li id='li-1'>
                        <p>Lahore To Muzaffargarh</p>
                        <button id='b-1'>BOOK NOW</button>
                        </li>
                        <li id='li-1'>
                        <p>Lahore To Multan</p>
                        <button id='b-2'>BOOK NOW</button>
                        </li>
                        <li id='li-1'>
                        <p>Bahawalpur To Lahore</p>
                        <button id='b-3'>BOOK NOW</button>
                        </li>

                    </div>
                    <div id='col-2' className="col-6">
                    <li id='li-1'>
                        <p>Lahore To Muzaffargarh</p>
                        <button id='b-1'>BOOK NOW</button>
                        </li>
                        <li id='li-1'>
                        <p>Lahore To Multan</p>
                        <button id='b-2'>BOOK NOW</button>
                        </li>
                        <li id='li-1'>
                        <p>Bahawalpur To Lahore</p>
                        <button id='b-3'>BOOK NOW</button>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popularroutes;