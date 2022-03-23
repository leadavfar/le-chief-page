import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRecipes } from "../../../actions";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import ReadRecipes from "../ReadRecipes/ReadRecipes";
import Styles from './CrudHome.module.css'

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
                    <div>
                        <Link to='/crud/create_recipe'> CREATE</Link>
                    </div>
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