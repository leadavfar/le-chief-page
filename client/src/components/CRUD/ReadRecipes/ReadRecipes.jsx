import react from "react";
import Styles from './ReadRecipes.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../actions";

export default function ReadRecipes({ title, image, diets, price, id }) {

    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(deleteRecipe(id))
        window.location.reload(false);
    }

    return (
        <div>
            <h3>{title}</h3>
            <img src={!image ? "https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1-800x400.jpg" :
                image} width='300px' height='220px' alt='image not found' />
            <Link to={'/recipes/' + id}><button>Read</button></Link>
            <Link to={'/crud/update_recipe/' + id}><button>Edit</button></Link>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div >
    )
}