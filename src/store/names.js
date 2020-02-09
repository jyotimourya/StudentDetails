export const ADD_NAME = "ADD_NAME";
export const REMOVE_NAME = "REMOVE_NAME";

export default function(state = { name: [] }, action) {
  switch (action.type) {
    case ADD_NAME:
      const oldName = state.name;
      const newName = [...oldName, action.payload];
      return { name: newName };
    case REMOVE_NAME:
      return {
        ...state,
        orders: state.name.filter(n => {
          return n.id !== action.id;
        })
      };
    default:
      return state;
  }
}
