export function projectReducer(state, action) {

  const { type, ...params } = action;

  console.log("action:", action, 'params:', params)

  switch (type) {
    case "initialize":
      return action.payload;
    case "add":
      return [...state, params];
    case "delete":
      return state.filter((project) => project.id !== action.id);
    default:
      return state;
  }
}

export function tasksReducer(state, action) {
  const { type, ...params } = action;

  console.log("action:", action, 'params:', params)


  switch (type) {
    case "initialize":
      return action.payload;
    case "add":
      return [...state, params];
    case "delete":
      return state.filter((project) => project.id !== action.id);
    default:
      return state;
  }
}
