import React from 'react';
import Footer from '../Footer/Footer';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div>
           <div className="top-header">
                <h1>The Hear Us Story</h1>
                <h1> <span className="span-text">We are waiting for you</span> </h1>
            </div>
           <div  className="row">
               <div className="col-md-3"></div>
           <div className="paratex col-md-6">
                <p>
                HearUS is an online emotional support system which provides trained listeners so that you can share your problems and issues without being judged.You can also get consultation from licensed psychologists.Listeners are trained volunteers under the supervision of Psychologists , majorly someone who belongs to this field.Its totally free of cost if you want to connect to a listener. Online counselling sessions with licensed psychologists are paid.
                </p>
                <p>
                    We also provide traning to volunteers. Anyone who wants to help others can volunteer as a listener by just filling out a form. Volunteers are trained under the supervision of Psychologists .
                </p>
            </div>
            <div className="col-md-3"></div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;