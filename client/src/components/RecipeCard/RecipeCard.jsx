import react from "react";
import Styles from './RecipeCard.module.css'
import { Link } from "react-router-dom";

export default function RecipeCard({ title, image, diets, id }) {
    return (
        <div>
            <h3>{title}</h3>
            <Link to={'/recipes/' + id}>
                <img src={!image ? "https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1-800x400.jpg" :
                    image} alt='image not found' />
            </Link>
            <p>{diets.map(el => el + ', ')}</p>
        </div>
    )
}