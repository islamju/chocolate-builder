import React from "react";

import classes from "./PizzaIngredient.module.css";
import web from "../../../images/web.png";
import kok from "../../../images/kok.png";
import tru from "../../../images/tru.png";
import rep from "../../../images/rep.png";
import pop from "../../../images/pop.png";
import mat from "../../../images/mat.png";

const PizzaIngredient = ({ type, fixed }) => {
  const types = {
  web: { backgroundImage: `url(${web})`, width: "40px", height: "40px",backgroundSize:'cover' },
  kok: { backgroundImage: `url(${kok})`, width: "40px", height: "40px", backgroundSize:'cover'  },
  tru: { backgroundImage: `url(${tru})`, width: "40px", height: "40px", backgroundSize:'cover'  },
  rep: { backgroundImage: `url(${rep})`, width: "40px", height: "40px",backgroundSize:'cover'  },
  pop: { backgroundImage: `url(${pop})`, width: "40px", height: "40px", backgroundSize:'cover' },
  mat: { backgroundImage: `url(${mat})`, width: "40px", height: "40px", backgroundSize:'cover' },
  };

  //   const pizzaDiameter = 380;
  //   const pizzaRadius = pizzaDiameter / 2;
  //   const ingredientRadius = parseInt(ingredientWidth) / 2;

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