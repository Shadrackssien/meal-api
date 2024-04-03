import {useState, useEffect} from "react";
import axios from "axios";
import "./style.css"

function Main() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
      .then(response => {setItems(response.data.meals); console.log(response.data)})

      .catch((error) => {console.log(error)})
  }, [])
  
  return (
    <div className="item-container">
        {items.map(item => (
           <section key={item.idMeal}>
           <img src={item.strMealThumb} alt={item.idMeal} />
         </section>
        ))}
    </div>
  )
}

function App() {
  return (
    <div>
      <Main />
    </div>
  )
}
export default App;