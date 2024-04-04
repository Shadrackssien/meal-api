import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

function Main() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
            .then(response => {setItems(response.data.meals);})
            .catch(error => {console.log(error);});
    }, []);

    return (
        <div className="items-container">
            {items.map(item => (
                <section key={item.idMeal} className="card">
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <section className="content">
                    <h2>{item.strMeal}</h2>
                    </section>
                </section>
            ))}
        </div>
    );
}

export default Main;
