import React from "react";
import Styles from './Foot.module.css';
import { FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";

export default function Foot() {
    return (
        <div className={Styles.margin}>
            <div className={Styles.container}>
                <div className={Styles.credits}>
                    <h2>Leandro Farias ® 2021</h2>
                </div>
                <div className={Styles.links}>
                    <h2>
                        <a href="https://leandro-farias-portfolio.vercel.app/"> <FaUserTie /></a>
                        <a href="https://www.linkedin.com/in/leadavfar/"> <FaLinkedin /></a>
                        <a href="https://github.com/leadavfar"> <FaGithub /></a>
                    </h2>
                </div>
            </div>
        </div>
    )
}