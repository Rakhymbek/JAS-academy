import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

export function MoviePage() {
    const params = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [params.id]);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU/`)
        .then((res) => res.json())
        .then((data) => setSimilarMovie(data.results.slice(0, 4)))
    }, [params.id]);

    return (
       <div className="movie_block_wrapper">
            <div className="movie_block" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <div className="movie_block_content">
                            <p>
                                <span className="movie_title_rus">
                                    {data.title}
                                </span>
                            </p>
                            <Rating 
                                name="read-only" 
                                value={(data.vote_average/10) * 5} 
                                readOnly 
                            />
                            <h1>
                                {data.original_title}
                            </h1>
                            <p className="movie_description">
                                    {data.overview}
                            </p>
                </div>
            </div>
            <div className="similar_movies_block">
                <h1>
                     Similar movies
                </h1>
                <ul className="movies_list">
                {similarMovie.map((movie, index) => (
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
            </div>
       </div>
    );
}