import Button from "../../../UI/Button/Button";

import PizzaIngeredients from "../../PizzaIngeredients/PizzaIngeredients";
import classes from "./PizzaControls.module.css";

const PizzaControls = ({ type, addedIngeredients, RemoveIngredients, count }) => {
    return (
        <div className={classes.PizzaControls}>
            <Button onClick={() => addedIngeredients(type)}>+</Button>
            <div className={classes.ingredient}><PizzaIngeredients type={type} /></div>
            {/* {type} */}
            <Button onClick={() => RemoveIngredients(type)} disabled={!count}>-</Button>
            
        </div>
    );
}

export default PizzaControls;