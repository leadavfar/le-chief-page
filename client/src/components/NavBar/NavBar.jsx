import React from "react";
import logo from "./logo.png"
import logoWhite from "../../public/logo - white.png"
import { Link } from "react-router-dom";
import Styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <div className={Styles.container}>
            <nav className={Styles.navbar}>
                <Link to="/">
                    <div className={Styles.logo}>
                        <img src={logoWhite} width='30px' height='30px' alt="not found" />
                        <h1>Le Chief Page</h1>
                    </div>
                </Link>
                {/* <ul>
                    <li> <Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/crud">Manage Recipes</Link></li>
                </ul> */}
                <div className={Styles.links}>
                    <h3><Link to="/recipes">Recipes</Link></h3>
                    <h3><Link to="/crud">Manage Recipes</Link></h3>
                </div>
            </nav>
        </div>
    )
}