export const addUserAction = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};