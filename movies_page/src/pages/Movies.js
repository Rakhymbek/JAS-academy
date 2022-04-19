import { useCallback, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  SET_MOVIES_QUERY,
  SET_MOVIES_SORT,
} from "../store/actions/fetchMovies";

export function Movies() {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useSelector((state) => state.movies.query);
  const page = useSelector((state) => state.movies.page);
  const sort = useSelector((state) => state.movies.sort);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  
  const setSortBy = useCallback(
    (payload) => {
      dispatch({ type: SET_MOVIES_SORT, payload });
    },
    [dispatch]
  );

  const setQuery = useCallback(
    (payload) => {
      dispatch({ type: SET_MOVIES_QUERY, payload });
    },
    [dispatch]
  );
  const searchMovie = useCallback(
    ({ page = 1, sortBy = sort } = {}) => {
      dispatch(fetchMovies({ page, sortBy, query }));
    },
    [dispatch, query, sort]
  );

  const sortMoviesBy = (event) => {
    setSortBy(event.target.value);
    searchMovie({ sortBy: event.target.value });
  };

  return (
    <Container style={{ maxWidth: 1300 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Movies</h1>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "baseline",
          }}
          className="search_box"
        >
          <FormControl variant="standard" fullWidth style={{ marginRight: 20 }}>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort by"
              disabled={!!query && query.length > 0}
              onChange={(e) => sortMoviesBy(e)}
            >
              <MenuItem value={"popularity"}>Popularity</MenuItem>
              <MenuItem value={"release_date"}>Release-date</MenuItem>
              <MenuItem value={"vote_average"}>Rating</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={searchMovie} className="search_btn">
            Search
          </Button>
        </div>
      </div>
      <ul className="movies_list">
        {movies.map((movie, index) => (
          <Card
            onClick={() => navigate("/movies/" + movie.id)}
            key={index}
            className="cards"
            sx={{
              minWidth: 292,
              minHeight: 440,
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CardContent sx={{ marginTop: 36.5, padding: 3 }}>
              <Typography
                sx={{ fontSize: 14, zIndex: 1 }}
                color="text.secondary"
                gutterBottom
              >
                <span className="movie_title_rus">{movie.title}</span>
              </Typography>
              <Typography variant="h6" component="div">
                <Rating
                  name="read-only"
                  value={(movie.vote_average / 10) * 5}
                  readOnly
                />
              </Typography>
              <Typography className="title_box">
                <span className="movie_title">{movie.original_title}</span>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </ul>
      <Pagination
        count={page.total_pages}
        page={page.page}
        onChange={(e, page) => searchMovie({ page })}
        variant="outlined"
        shape="rounded"
      />
    </Container>
  );
}
