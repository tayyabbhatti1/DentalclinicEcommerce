import './Bar.css';
import { List } from "./Citylist.js"
import React, { Component } from 'react';
import bus from '../Images/slider1.jpg';
import slider7 from '../Images/slider 7.jpg';
import websliderbus2a from '../Images/websliderbus2a.jpg'

class Bar extends Component {
    state = {
        name_city: List()
    }
    render() {
        return (
            <div id='main'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner" id='carousal'>
                    <div className="carousel-item active">
                        <img src={bus} className="d-block w-100" alt="First Slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src={slider7} className="d-block w-100" alt="Second Slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src={websliderbus2a.jpg} className="d-block w-100" alt="Third Slide"/>
                    </div>
                </div>
            </div>
                <div id='main-1'>
                    <div class="dropdown">
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            From
                            <i class="bi bi-geo-alt-fill" id='icon-1'></i>
                        </button>


                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><input type="search" name="" id="search" /></li>
                            {this.state.name_city.map(data => (<li><a class="dropdown-item" href="#"><i id='state_icon' class="bi bi-geo-alt-fill"><span id='state_a'>{data.name}</span></i></a></li>))}
                        </ul>
                    </div>

                    <div class="dropdown">
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            To
                            <i class="bi bi-geo-alt-fill" id='icon-1'></i>
                        </button>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><input type="search" name="" id="search" /></li>
                            {this.state.name_city.map(data => (<li><a class="dropdown-item" href="#"><i id='state_icon' class="bi bi-geo-alt-fill"><span id='state_a'>{data.name}</span></i></a></li>))}
                        </ul>
                    </div>

                    <div class="dropdown">
                        <input type="date" name="" id="date" />
                    </div>
                    <div id='Search'>
                        <button id='Search-Button' type="button" class="btn" >Search<i id='icon-2' class="bi bi-search"></i></button>
                    </div>

                </div>
            </div>

        );
    }
}

export default Bar;
