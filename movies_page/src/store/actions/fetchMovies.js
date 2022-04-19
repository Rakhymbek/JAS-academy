export const SET_MOVIES = 'movies/set'
export const SET_MOVIES_PAGE = 'movies/setPage'
export const SET_MOVIES_QUERY = 'movies/setQuery'
export const SET_MOVIES_SORT = 'movies/setSort'


export const fetchMovies = ({query, page = 1, sortBy = 'popularity'} = {}) => dispatch => {
    let method = "discover";
    if (query && query.length > 0) method = "search";
    fetch(
      `https://api.themoviedb.org/3/${method}/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=${sortBy}.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
            type: SET_MOVIES,
            payload: data.results
        })
        dispatch({
            type: SET_MOVIES_PAGE,
            payload: {
                page: data.page,
                total_pages: Math.min(data.total_pages, 500)
            }
        })
      });
}
