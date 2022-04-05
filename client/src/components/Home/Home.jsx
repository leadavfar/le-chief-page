import React from "react";
import NavBar from "../NavBar/NavBar";
import image from '../../public/kirsty2.jpg'
import Styles from './Home.module.css'

export default function Home() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className={Styles.container}>
                {/* <h1>LE CHIEF PAGE</h1> */}
                <img src={image} height='600px' alt='image not found' />
            </div>
        </div>
    )
}