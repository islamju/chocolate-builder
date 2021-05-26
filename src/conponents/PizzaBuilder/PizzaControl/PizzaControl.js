import Button from "../../UI/Button/Button";
import classes from "./PizzaControl.module.css";
import PizzaControls from "./PizzaControls/PizzaControls";

const PizzaControl = ({ ingredients, addedIngeredients, RemoveIngredients , finishOrder}) => {
    const result = [];
    let total = 0;
    for (const ingredient in ingredients) {
        total += ingredients[ingredient]
        result.push(<PizzaControls type={ingredient} 
            addedIngeredients={addedIngeredients}
             RemoveIngredients={RemoveIngredients} 
             count={ingredients[ingredient]}/>)
    }
    return (
        <div className={classes.PizzaControl}>
            {result}
            <Button disabled={!total} onClick={() => finishOrder()} >Order</Button>
        
        </div>
    );
}

export default PizzaControl;