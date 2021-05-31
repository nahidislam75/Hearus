import React from 'react';
import appPic2 from '../Pics/app.png'
import "./Section2.css"

const Section2 = () => {
    return (
        <div className="one-section">
            <div class="container">
                <div class="row ">
                    <div class="col-md-6 text">
                        <h1>Talk To Trained</h1>
                        <h1>Empathetic Listeners</h1>
                        <p>Hear Us is a group of trained empathetic listeners who decided to
                            use their skills for a good cause. No matter who you are or where do
                            you live or what you’re going through, we are here to listen to you
                            and care for you. We might be strangers on the surface, but
                            underneath we're just the friends you haven't met yet. Hear Us
                            provides you free of cost sessions with empathetic listeners.</p>
                        <button type="button" href="https://play.google.com/store/apps/details?id=me.hearus.app" class="btn btn-success">Download the App Now</button>
                    </div>
                    <div class="col-md-6 pic-align d-flex justify-content-start align-items-center">
                        <img className="second-pic" src={appPic2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;