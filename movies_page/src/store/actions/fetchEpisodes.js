import { SET_EPISODES, SET_EPISODE_PAGE } from "../reducers/charactersReducer";

export const fetchEpisodes =
  ({ episodePage = 1 } = {}) =>
  (dispatch) => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${episodePage}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: SET_EPISODES,
          payload: data.results,
        });
        if (episodePage < data.info.pages) {
          dispatch({ type: SET_EPISODE_PAGE, payload: episodePage + 1 });
        }
      });
  };

/* (prev) => [...prev, ...data.results] */
