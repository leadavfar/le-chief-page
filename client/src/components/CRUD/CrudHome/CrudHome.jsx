import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRecipes } from "../../../actions";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import ReadRecipes from "../ReadRecipes/ReadRecipes";
import Styles from './CrudHome.module.css';
import { FaRegEdit } from "react-icons/fa";

export default function CrudHome() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersRecipes());
    }, [dispatch]);

    const usersRecipes = useSelector((state) => state.usersRecipes);

    return (
        <div>
            <NavBar />
            <div>
                {/* Recipes render */}
                <div className={Styles.recipe_container}>

                    <Link to='/crud/create_recipe'>
                        <div className={Styles.card}>
                            <div className={Styles.image}>
                                <div className={Styles.image__img}>
                                    <h1>+</h1>
                                </div>
                            </div>
                            <div className={Styles.title}>
                                <h3>Create New Recipe</h3>
                            </div>
                            {/* <h1>+</h1> */}
                        </div>
                    </Link>

                    {usersRecipes?.map((el) => {
                        return (
                            <div key={el._id}>
                                <ReadRecipes title={el.title} image={el.image} diets={el.diets} price={el.price} id={el._id} />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
} 