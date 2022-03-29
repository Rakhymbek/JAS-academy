import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Rating from '@mui/material/Rating';
import {useNavigate} from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";

export function Movies() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });

    }, []);
  
    return(
            <Container style={{maxWidth: 1300}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h1>Movies</h1>
                    <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'baseline'}} className="search_box">
                        <TextField  id="standard-basic" label="Search" variant="standard" onChange={(e) => console.log(e.target.value)} />
                        <Button className="search_btn">Search</Button>
                    </div>
                </div>
                <ul className="movies_list">
                    {movies.map((movie, index) => (
                        <Card onClick={() => navigate('/movies/' + movie.id)} key={index} className="cards" sx={{ 
                            minWidth: 292, 
                            minHeight: 440 , 
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}>
                            <CardContent sx={{marginTop: 36.5, padding: 3}}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <span className="movie_title_rus">
                                        {movie.title}
                                </span>
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <Rating 
                                    name="read-only" 
                                    value={(movie.vote_average/10) * 5} 
                                    readOnly />
                                </Typography>
                                <Typography className='title_box'>
                                    <span className="movie_title">
                                        {movie.original_title}
                                    </span>
                                </Typography>
                            </CardContent>
                    </Card>
                    ))}
                </ul>
            </Container>
        
    );
}