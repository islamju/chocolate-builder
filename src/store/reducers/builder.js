import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../actions/types";

const initialState = {
  ingredients: {
  },
  price: 0,
};
const prices = {
  kok: 10,
  mat: 10,
  pop: 10,
  rep: 10,
  tru: 10,
  web: 10,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
    case SET_INGREDIENTS:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;