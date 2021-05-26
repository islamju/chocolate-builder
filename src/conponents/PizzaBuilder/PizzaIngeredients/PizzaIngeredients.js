import React from 'react'
import classes from './PizzaIngeredients.module.css'
import blackOlive from '../../../imges/blackOlive.svg'
import greenOlive from '../../../imges/greenOlive.svg'
import redPepper from '../../../imges/redPepper.svg'
import salami from '../../../imges/salami.svg'
import yellowPepper from '../../../imges/yellowPepper.svg'
import yashkino from '../../../imges/yashkino.jpg'

const PizzaIngeredients = ({type}) => {
    const types = {
        yashkino: {
            backgroundImage: `url(${yashkino}) `,
            width: "50px",
            height: "50px",
        },
        blackOlive: {
            backgroundImage: `url(${blackOlive}) `,
            width: "50px",
            height: "50px",
        },
        greenOlive: {
            backgroundImage: `url(${greenOlive}) `,
            width: "50px",
            height: "50px",
        },
        redPepper: {
            backgroundImage: `url(${redPepper}) `,
            width: "50px",
            height: "50px",
        },
        salami: {
            backgroundImage: `url(${salami}) `,
            width: "50px",
            height: "50px",
        },
        yellowPepper: {
            backgroundImage: `url(${yellowPepper}) `,
            width: "50px",
            height: "50px",
        },
    }

    function getPosition(ingredientWidth) {
        const dounutDiameter = 400;
        const dounutRadius = dounutDiameter / 2;
        const ingredientRadius = parseInt(ingredientWidth) / 2;
    
        const ingredientTop = Math.round(Math.random() * dounutDiameter);
        const ingredientLeft = Math.round(Math.random() * dounutDiameter);
    
        const distance = Math.sqrt(
          Math.pow(ingredientTop - dounutRadius, 2) + Math.pow(ingredientLeft - dounutRadius, 2)
        ) + ingredientRadius;
    
        return distance < dounutRadius
          ? {
            top: ingredientTop - ingredientRadius,
            left: ingredientLeft - ingredientRadius
          }
          : getPosition(ingredientWidth);
      }
    
      // Get random position for this ingredient.
    //   if (!fixed) {
        const position = getPosition(types[type].width);
        types[type].top = position.top + "px";
        types[type].left = position.left + "px";
    
        // Get random rotation for this ingredient.
        types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
    //   }
    return (
        <div className={classes.PizzaIngeredients} style={types[type]} >
{/* <img src={plate} alt="plate" width="180"/> */}
        </div>
    );
}

export default React.memo(PizzaIngeredients);