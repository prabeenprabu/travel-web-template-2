import React from "react";
import CardsItem from "./CardsItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardsItem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfalls"
                            label="Adventure"
                            path="/service"
                        />
                        <CardsItem
                            src="images/img-2.jpg"
                            text="Explore the Jungle"
                            label="Adventure"
                            path="/service"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardsItem
                            src="images/img-3.jpg"
                            text="Explore the ocean"
                            label="Adventure"
                            path="/service"
                        />
                        <CardsItem
                            src="images/img-8.jpg"
                            text="Explore the desert"
                            label="Adventure"
                            path="/service"
                        />
                        <CardsItem
                            src="images/img-4.jpg"
                            text="Explore the island"
                            label="Adventure"
                            path="/service"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
