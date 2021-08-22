export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      console.log(action.restaurants)
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurants]
      }

    default:
      return state;

  }
};
