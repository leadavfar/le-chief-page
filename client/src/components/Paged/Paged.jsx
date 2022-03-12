import React from "react";

export default function Paged({ recipesInPage, recipes, paged }) {
    const pageNumber = [];
    
    for (let i = 1; i <= Math.ceil(recipes / recipesInPage); i++) {
        pageNumber.push(i);
    };

    return (
        <div>
            <ul>
                {pageNumber &&
                    pageNumber.map(number => (
                        <li key={number}>
                            <a onClick={() => paged(number)}>{number}</a>
                        </li>
                    ))}
            </ul>
        </div>
    )
}