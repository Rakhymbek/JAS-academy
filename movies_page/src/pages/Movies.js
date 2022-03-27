import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Rating from '@mui/material/Rating';

export function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });

    }, []);
  
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Movies</h1>
            <ul className="movies_list">
                {movies.map((movie) => (
                    <Card className="cards" sx={{ 
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
        </div>
        
    );
}