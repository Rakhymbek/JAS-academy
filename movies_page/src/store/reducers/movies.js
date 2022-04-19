import {
  SET_MOVIES,
  SET_MOVIES_PAGE,
  SET_MOVIES_QUERY,
  SET_MOVIES_SORT,
} from "../actions/fetchMovies";

const initState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  movies: [],
  query: "",
  page: {
    page: 1,
    total_pages: 0,
  },
  sort: "popularity",
};

export function movies(state = initState, action) {
  const newState = { ...state };

  switch (action.type) {
    case SET_MOVIES:
      newState.movies = action.payload;
      break;
    case SET_MOVIES_QUERY:
      newState.query = action.payload;
      break;
    case SET_MOVIES_PAGE:
      newState.page = action.payload;
      break;
    case SET_MOVIES_SORT:
      newState.sort = action.payload;
      break;
    default:
      return state;
  }
  return newState;
}

/* const initState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    movies: [],
    query: "",
    page: {
      page: 1,
      total_pages: 0,
    },
    sort: "popularity",
  };
  const TODOS_ADD = "todos/add";
  const TODOS_REMOVE = "todos/remove";
  const TODOS_DONE_CHANGE = "todos/doneChange";
  
  const indexReducer = function (state = initState, action) {
    const newState = { ...state };
    switch (action.type) {
      case TODOS_ADD:
        newState.todos = [action.payload, ...state.todos];
        break;
      case TODOS_REMOVE:
        state.todos.splice(action.index, 1);
        newState.todos = [...state.todos];
        break;
      case TODOS_DONE_CHANGE:
        const doneElement = state.todos.splice(action.index, 1)[0];
        if (doneElement.done) {
          doneElement.done = false;
          state.todos.unshift(doneElement);
          newState.todos = [...state.todos];
        } else {
          doneElement.done = true;
          state.todos.push(doneElement);
          newState.todos = [...state.todos];
        }
        break;
      case "movies/set":
        newState.movies = action.payload;
        break;
      case "query/set":
        newState.query = action.payload;
        break;
      case "page/set":
        newState.page = action.payload;
        break;
      case "sort/set":
        newState.sort = action.payload;
        break;
      default:
        return state;
    }
    localStorage.setItem("todos", JSON.stringify(newState.todos));
    return newState;
  };
   */
