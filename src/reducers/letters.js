const initialState = [];

export default function letters(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.payload];
    case "DELETE_MESSAGE":
      const newList = state.filter(item => item.title !== action.payload);
      return newList;
    default:
      return state;
  }
}
