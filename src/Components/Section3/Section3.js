import React from 'react';
import appPic3 from '../Pics/psy.png'
import "./Section3.css"

const Section3 = () => {
    return (
        <div className="full-section">
            <div class="container">
                <div class="row ">
                    <div class="col-md-6 pic-align d-flex justify-content-start align-items-center">
                        <img className="third-pic" src={appPic3} alt="" />
                    </div>
                    <div class="col-md-6 text">
                        <h1>Book A Session with</h1>
                        <h1>Licensed Psychologists</h1>
                        <p>Need more help? Book sessions anonymously with professional
                            psychologists 24*7 by sitting at your home at the most affordable
                            price</p>
                        <button type="button"  class="btn btn-success">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;