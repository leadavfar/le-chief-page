import React from "react";
import Styles from './Foot.module.css';
import { FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";

export default function Foot() {
    return (
        <div className={Styles.margin}>
            <div className={Styles.container}>
                <div className={Styles.credits}>
                    <h3>Leandro Farias ® 2021</h3>
                </div>
                <div className={Styles.links}>
                    <h3>
                        <a href="https://leandro-farias-portfolio.vercel.app/"> <FaUserTie fontSize={'22px'} /></a>
                        <a href="https://www.linkedin.com/in/leadavfar/"> <FaLinkedin fontSize={'22px'} /></a>
                        <a href="https://github.com/leadavfar"> <FaGithub fontSize={'22px'} /></a>
                    </h3>
                </div>
            </div>
        </div>
    )
}