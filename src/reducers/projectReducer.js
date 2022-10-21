export function projectReducer(state, action) {
  console.log("action:", action);
  const {type, ...params} = action;

  switch (type) {
    case "initialize":
      return action.payload;

    case "add":
      return [...state, params]
    case "delete":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
}
