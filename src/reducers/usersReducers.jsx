const initialState = {
  users: [
    { name: "Nana Adwoa", email: "na.adwoa@codetrain.com", gen: 10 },
    { name: "Tony", email: "t.ony@codetrain.com", gen: 10 },
  ],
};

function usersReducers (state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "EDIT_USER":
      return state;

    case "DELETE_USER":
      return state;

    default:
      return state;
  }
};


export default usersReducers;