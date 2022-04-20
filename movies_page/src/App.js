import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movies } from "./pages/Movies";
import { Navbar } from "./components/Navbar";
import { MoviePage } from "./pages/MoviePage";
import { RickAndMorty } from "./pages/RickAndMorty";
import { CharacterPage } from "./pages/CharacterPage";
import { Counter } from "./components/Counter";
import { ToDo } from "./pages/ToDo";
import { ShopPage } from "./pages/ShopPage";

/* import { CommentBlock } from './components/CommentBlock';
import { fetchTopTracks } from './fetchers/fetchTopTracks';
import { Table } from './components/Table'; */

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/RickAndMorty" element={<RickAndMorty />} />
        <Route path="/RickAndMorty/:id" element={<CharacterPage />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/ShopPage" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;

/* const [tracks, setTracks] = useState([]);


  useEffect(() => {
    fetchTopTracks().then((data) => setTracks(data.toptracks.track));
  }, []);
 */

/* <Table tracks={tracks} /> */

/* const comments = [
    {
        text: 'Hot Stuff!',
        created: '11:00 26.03.2022',
        authorName: 'Vasya Pupkin',
        authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
    },
    {
        text: 'Hot Stuff 2!',
        created: '11:00 26.03.2022',
        authorName: 'Almas',
        authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
    },
    {
        text: 'Hot Stuff 3!',
        created: '11:00 26.03.2022',
        authorName: 'Vasya Pupkin',
        authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
    },
] */

/* 
  useEffect(() => {
    fetch('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
      .then((response) => {
    return response.json();
      })
      .then((data) => {
    setComments(data);
    return data;
       });
  }, []);
   */ //Comments

/*  Comments Block
        {comments.map((comment, index) =>
            <CommentBlock comment={comment} key={index} />
        )} */
