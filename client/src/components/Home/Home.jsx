import React from "react";
import NavBar from "../NavBar/NavBar";
import image from '../../public/kirsty2.jpg'
import logo from '../../public/logo - black.png'
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
                <img src={logo} />
                <p>
                    In this app you can get many recipes from Spoonacular and many users,
                    <br />
                    also you can create your own recipes
                </p>
            </div>
            <div className={Styles.fut}>
                <Foot />
            </div>
        </div>
    )
}