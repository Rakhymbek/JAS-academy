const initState = {
  characters: [],
  episodes: [],
  query: "",
  totalPages: 0,
  episodePage: 1,
  sort: "",
};

export const SET_CHARACTERS = "characters/set";
export const SET_EPISODES = "episodes/set";
export const SET_TOTAL_PAGES = "totalPages/setTotalPages";

export let SET_PAGE = "page/setPage";
export let SET_EPISODE_PAGE = "episodePage/setEpisodesPage";

export const SET_QUERY = "query/setQuery";
export const SET_SORT = "sort/setSort";

export function charactersReducer(state = initState, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_CHARACTERS:
      newState.characters = action.payload;
      break;
    case SET_EPISODES:
      newState.episodes = action.payload;
      break;
    case SET_TOTAL_PAGES:
      newState.totalPages = action.payload;
      break;
    case SET_PAGE:
      newState.page = action.payload;
      break;
    case SET_EPISODE_PAGE:
      newState.episodePage = action.payload;
      break;
    case SET_QUERY:
      newState.query = action.payload;
      break;
    case SET_SORT:
      newState.sort = action.payload;
      break;
    default:
      return state;
  }
  return newState;
}
