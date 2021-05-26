import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./PizzaBuilder.module.css";
import PizzaControl from "./PizzaControl/PizzaControl"
import PizzaPrewev from "./PizzaPrewev/PizzaPrewev";


const PizzaBuilder = () => {
    const [ingredients, setIngredients] = useState({})
    const [price, setPrice] = useState(0)
    const prices = {
        yashkino: 10,
        blackOlive: 13,
        greenOlive: 10,
        redPepper: 12,
        salami: 50,
        yellowPepper: 15
    }
    // const ingredients = {
    //     blackOlive: 1,
    //     greenOlive: 1,
    //     redPepper: 1,
    //     salami: 1,
    //     yellowPepper: 1
    // }
    useEffect(loadDefaults, []);
    function loadDefaults() {
        axios.get('https://pizza-93d38-default-rtdb.firebaseio.com/defauld.json')
            .then((response) => {
                setIngredients(response.data.ingredients)
            })
    }

    function finishOrder(){
        axios.post('https://pizza-93d38-default-rtdb.firebaseio.com/order.json',{
            ingredients : ingredients,
            price: price,
            name: "Sadur Japarov",
            Phone: "0703 10 92 12",
            addres : "jusaeve strt"
        })
    }






    function addedIngeredients(type) {
        const newIngredients = { ...ingredients };
        newIngredients[type]++;
        setIngredients(newIngredients)
         setPrice(price + prices[type])
    }
    function RemoveIngredients(type) {
        const newIngredients = { ...ingredients };
        newIngredients[type]--;
        setIngredients(newIngredients);
        setPrice(price - prices[type])
    }



    return (
        <div className={classes.PizzaBuilder}>
            <PizzaPrewev ingredients={ingredients} price={price} />
            <PizzaControl ingredients={ingredients} addedIngeredients={addedIngeredients} RemoveIngredients={RemoveIngredients}
            finishOrder={finishOrder} />
        </div>
    );
}

export default PizzaBuilder;