import React from 'react';
import Carditem from './Carditem';
import './Cards.css';


function Cards() {
    return(
    <div className="cards">
        <h1>Check your foto</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <Carditem src="/images/img-9.jpg" text="Explore amazone" label="Adventure" path="/service" />
                    <Carditem src="/images/img-8.jpg" text="Explore amazone" label="Adventure" path="/service" />
                    
                </ul>
                <ul className="cards__items">
                    <Carditem src="/images/img-7.jpg" text="Explore amazone" label="Adventure" path="/service" />
                    <Carditem src="/images/img-6.jpg" text="Explore amazone" label="Adventure" path="/service" />
                    <Carditem src="/images/img-5.jpg" text="Explore amazone" label="Adventure" path="/service" />
                </ul>
            </div>
        </div>
    </div>

    );
}

export default Cards