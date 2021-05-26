import PizzaIngeredients from "../PizzaIngeredients/PizzaIngeredients";
import classes from "./PizzaPrewev.module.css";
import plate from '../../../imges/plate.jpg'
const PizzaPrewev = ({ ingredients, price }) => {
    const result = [];
    for (const ingeredient in ingredients) {
        for (let i = 0; i < ingredients[ingeredient]; i++) {
            result.push(<PizzaIngeredients type={ingeredient} />)
        }
    }
    return (
        <div className={classes.PizzaPrewev}>

            <div style={{
                backgroundImage: `url(${plate} ) `,
                width: "270px",
                height: '280px',
                backgroundPosition: "cover"
            }}>

                <div className={classes.result}>{result}</div>
            </div>

            <div>{price.toFixed(1)}</div>
        </div>
    );
}

export default PizzaPrewev
