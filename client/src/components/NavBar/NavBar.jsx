import React from "react";
import { Link } from "react-router-dom";
import Styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <div className={Styles.container}>
            <nav>
                <div><Link to="/">Le Chief Page</Link></div>
                <ul>
                    <li> <Link to="/recipes">Recipes</Link></li>
                    {/* <li> <Link to="/recipes">Recipes</Link></li> */}
                </ul>
            </nav>
        </div>
    )
}