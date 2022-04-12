import React from "react";
import NavBar from "../NavBar/NavBar";
import image from '../../public/kirsty2.jpg'
import Styles from './Home.module.css'
import Foot from "../Foot/Foot";

export default function Home() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className={Styles.container}>
                {/* <img src={image} height='600px' alt='image not found' />
                <div className={Styles.image_text}>
                    caca
                </div> */}
                <h1>
                    Welcome to Le Chief Page
                </h1>
                <p>
                    In this app you can get many recipes from Spoonacular and many users, also you can create your own recipes
                </p>
            </div>
            <div>
                <Foot />
            </div>
        </div>
    )
}