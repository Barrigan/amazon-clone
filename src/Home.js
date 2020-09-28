import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3CQM8nPzf095hkP1QK31Qtktt98yzDW6MYjjZHKUp0QCrROz_Vg1dthMU" alt="" />
                <div className="home__row">
                    <Product id="001" title="Eufy BoostIQ RoboVac 11S (Slim), Robot Vacuum Cleaner, Super-Thin, 1300Pa Strong Suction, Quiet, Self-Charging Robotic Vacuum Cleaner, Cleans Hard Floors to Medium-Pile Carpets " price={139.99} image="https://www.bachataspice.com/extra-barrigan/amazon-challenge/vacum_robot.jpg" rating={5} />
                    <Product id="002" title="Apple iPad Pro 11 64GB Wi-Fi - Space Grey" price={569.99} image="https://www.bachataspice.com/extra-barrigan/amazon-challenge/tablet-diagonal.jpg" rating={4} />

                </div>
                <div className="home__row">
                    <Product id="003" title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={4} />
                    <Product id="004" title="SIHOHAN Waist Trainer Belt Back Brace Cincher Trimmer Sports Slimming Body Shaper Band with Dual Adjustable Belly for Fitness Workout, Unisex " price={15.99} image="https://www.bachataspice.com/extra-barrigan/amazon-challenge/waist-trainer.jpg" rating={5} />
                    <Product id="005" title="AstroAI Reusable Dust Face Mask with 7 Filters - Personal Protective Adjustable for Running, Cycling, Outdoor Activities(Black, 1 Mask + 7 Activated Carbon Filters +4 Breathing Valves) " price={14.99} image="https://www.bachataspice.com/extra-barrigan/amazon-challenge/face-mask.jpg" rating={4} />
                </div>
                <div className="home__row">
                    <Product id="006" title="AstroAI Reusable Dust Face Mask with 7 Filters - Personal Protective Adjustable for Running, Cycling, Outdoor Activities(Black, 1 Mask + 7 Activated Carbon Filters +4 Breathing Valves) " price={883.23} image="https://www.bachataspice.com/extra-barrigan/amazon-challenge/wide-screen.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home;
