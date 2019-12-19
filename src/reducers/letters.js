const initialState = [
  {
    date: "20-18-2018",
    title: "Test title 1",
    status: "done"
  },
  {
    date: "20-11-2018",
    title: "Test title 2",
    status: "pending"
  },
  {
    date: "20-08-2018",
    title: "Test title 3",
    status: "error"
  }
];

export default function letters(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.payload];

    default:
      return state;
  }
}
