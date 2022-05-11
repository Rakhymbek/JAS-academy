import { SET_CATEGORIES } from "../reducers/categories";

export const fetchCategories =
  () =>
  (dispatch) => {
    fetch(
        `https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/categories.json`
      )
        .then((res) => res.json())
        .then((data) => {
            dispatch({type: SET_CATEGORIES, payload: data});
        })
        .catch((error) => {
          console.log("There is nothing here");
        });
  };
