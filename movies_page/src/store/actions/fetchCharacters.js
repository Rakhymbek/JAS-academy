import { SET_CHARACTERS, SET_TOTAL_PAGES } from "../reducers/charactersReducer";

export const fetchCharacters =
  ({query = '', pageInfo = 1, sortBy = '' } = {}) =>
  (dispatch) => {
    fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageInfo}&name=${query}&status=${sortBy}`
      )
        .then((res) => res.json())
        .then((data) => {
            dispatch({type: SET_CHARACTERS, payload: data.results});
            dispatch({type: SET_TOTAL_PAGES, payload: data.info.pages});
        })
        .catch((error) => {
          console.log("There is nothing here");
        });
  };
