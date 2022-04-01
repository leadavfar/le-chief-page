import react from "react";
import Styles from './RecipeCard.module.css'
import { Link } from "react-router-dom";

export default function RecipeCard({ title, image, diets, price, id }) {
    return (
        <div className={Styles.card}>
            <Link to={'/recipes/' + id}>
                <div className={Styles.image}>
                    <img className={Styles.image__img} src={!image ? "https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1-800x400.jpg" :
                        image}/*  width='150px' height='200px' */  alt='image not found' />
                    <div className={Styles.image__overlay}>
                        <div className={Styles.description}>
                            <p> <b>Diets: </b>{diets.map(el => el + ', ')}</p>
                            <p>-</p>
                            <p><b>Estimated budget: </b>${price}</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.title}>
                    <h4 >{title}</h4>
                </div>
            </Link>
        </div>
    )
}