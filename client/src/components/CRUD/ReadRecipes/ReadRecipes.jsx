import react from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../actions";
import { FaRegEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Styles from './ReadRecipes.module.css'

export default function ReadRecipes({ title, image, diets, price, id }) {

    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(deleteRecipe(id))
        window.location.reload(false);
    }

    return (
        <div className={Styles.card}>
            <div className={Styles.image}>
                <img className={Styles.image__img} src={!image ? "https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1-800x400.jpg" :
                    image} width='300px' height='220px' alt='image not found' />
                <div className={Styles.image__overlay}>
                    <div className={Styles.image__links}>
                        <Link to={'/recipes/' + id}> <div className={Styles.image__link__container}> <FaEye className={Styles.image__link} />{/* <button>Read</button> */}</div></Link>
                        <Link to={'/crud/update_recipe/' + id}> <div className={Styles.image__link__container}> <FaRegEdit className={Styles.image__link} />{/* <button>Edit</button> */}</div></Link>
                        <div className={Styles.image__link__container}><FaTrashAlt fontSize={'25px'} onClick={() => handleDelete(id)} className={Styles.image__link} /> </div>
                    </div>
                </div>
            </div>
            <div className={Styles.title}>
                <h3 >{title}</h3>
            </div>
        </div >
    )
}