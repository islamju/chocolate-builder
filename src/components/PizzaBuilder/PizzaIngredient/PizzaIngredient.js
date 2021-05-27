import React from "react";

import classes from "./PizzaIngredient.module.css";
import salamiBackground from "../../../images/web.png";
import tomatoBackground from "../../../images/kok.png";
import blackOliveBackground from "../../../images/pop.png";
import greenOliveBackground from "../../../images/rep.png";
import redPepperBackground from "../../../images/tru.png";
import yellowPepperBackground from "../../../images/mat.png";

const PizzaIngredient = ({ type, fixed }) => {
  const types = {
    salami: { backgroundImage: `url(${salamiBackground})`, width: "40px", height: "40px",
  backgroundSize:'cover' },
    tomato: { backgroundImage: `url(${tomatoBackground})`, width: "40px", height: "40px", backgroundSize:'cover'  },
    blackOlive: { backgroundImage: `url(${blackOliveBackground})`, width: "40px", height: "40px", backgroundSize:'cover'  },
    greenOlive: { backgroundImage: `url(${greenOliveBackground})`, width: "40pxpx", height: "40px",backgroundSize:'cover'  },
    redPepper: { backgroundImage: `url(${redPepperBackground})`, width: "40px", height: "40px", backgroundSize:'cover' },
    yellowPepper: { backgroundImage: `url(${yellowPepperBackground})`, width: "40px", height: "40px", backgroundSize:'cover' },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    // const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    // const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    // const distance = Math.sqrt(
    //   Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    // ) + ingredientRadius;

    // return distance < pizzaRadius
    //   ? {
    //     top: ingredientTop - ingredientRadius,
    //     left: ingredientLeft - ingredientRadius
    //   }
    //   : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  // if (!fixed) {
  //   const position = getPosition(types[type].width);
  //   types[type].top = position.top + "px";
  //   types[type].left = position.left + "px";
  // }
  // Get random rotation for this ingredient.
  // types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}

export default React.memo(PizzaIngredient);