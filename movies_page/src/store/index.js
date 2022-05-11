import { applyMiddleware, combineReducers, createStore } from "redux";
import { movies } from "./reducers/movies";
import { todos } from "./reducers/todos";
import { charactersReducer } from "./reducers/charactersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { shop } from "./reducers/shop";
import { categories } from "./reducers/categories";

export const store = createStore(
  combineReducers({
    movies,
    todos,
    charactersReducer,
    shop,
    categories,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

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
 
  return newState; 
}
export const store = createStore(indexReducer);*/
