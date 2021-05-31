import React from 'react';
import appPic from '../Pics/section1.png'
import "./Section1.css"

const Section1 = () => {
    return (
        <div className="full-section">
            <div class="container">
                <div class="row ">
                    <div class="col-md-6 pic-align d-flex justify-content-start align-items-center">
                        <img className="first-pic" src={appPic} alt="" />
                    </div>
                    <div class="col-md-6 text">
                        <h1>Feeling Low?</h1>
                        <h1>Need someone to hear you?</h1>
                        <p>Often there arise some thoughts in the human mind that tend to
                            impact our day to day lives negatively. Poorly-managed negative
                            thoughts are not good for mental as well as physical health.
                            Negative attitudes and feelings of helplessness can create chronic
                            stress, which upsets the body's hormone balance depleting the brain
                            chemicals required for happiness. It is rightly said that "Misery
                            loves Company" but in many cases, people are not comfortable in
                            sharing their miseries with known ones.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;