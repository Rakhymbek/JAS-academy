import { createStore } from "redux";

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
const TODOS_ADD = "todos/add";
const TODOS_REMOVE = "todos/remove";
const TODOS_DONE_CHANGE = "todos/doneChange";

const reducer = function (state = initState, action) {
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

export const store = createStore(reducer);

/* const TODOS_ADD = "todos/add";
const TODOS_REMOVE = "todos/remove";

const reducer = function (state = initState, action) {

  const newState = { ...state };
  
  switch (action.type) {
    case TODOS_ADD:
    
      return {...state, todos: [...state.todos, action.payload]};
    
    case TODOS_REMOVE:
      
      const newTodos = [...state.todos].filter(todo => todo.id !== action.payload);
      console.log(newTodos, '--' , action.payload);
      return {...state, todos: newTodos};
     
    case "todos/doneChange":
      const doneElement = state.todos.splice(action.index, 1)[0];
      if (doneElement.done) {
        doneElement.done = false;
        state.todos.unshift(doneElement);
        newState.todos = [...state.todos ];
      } else {
        doneElement.done = true;
        state.todos.push(doneElement);
        newState.todos =  [...state.todos,];
      }
      break;
    default:
      return state;
  }
 
  return newState; */
