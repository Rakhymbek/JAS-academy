import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function RicAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);

  return (
    <Container style={{ maxWidth: 1280 }}>
      <div>
        <h1>RicAndMorty</h1>
        <ul className="characters_list">
          {characters.map((character, index) => (
            <Card
              sx={{ display: "flex", maxWidth: 600, height: 220, flexGrow: 1 }}
              key={index}
            >
              <CardMedia
                component="img"
                sx={{ width: 230 }}
                image={character.image}
                alt="Live from space album cover"
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardContent
                  className="character_card_content"
                  sx={{
                    flex: "1 0 auto",
                    backgroundColor: "rgb(60, 62, 68)",
                  }}
                >
                  <Typography component="div" variant="h5">
                    <Link to={"/movies/"}>
                      <h2 className="character_title">{character.name}</h2>
                    </Link>
                  </Typography>
                  <Typography
                    fontFamily="Segoe UI"
                    color="white"
                    component="div"
                  >
                    <span className="character_status">
                      <span
                        className="status_icon"
                        style={{
                          backgroundColor:
                            character.status === "Alive"
                              ? "rgb(85, 204, 68)"
                              : character.status === "Dead"
                              ? "rgb(214, 61, 46)"
                              : "rgb(158, 158, 158)",
                        }}
                      ></span>
                      {character.status} - {character.species}
                    </span>
                    <Typography
                      fontFamily="Segoe UI"
                      fontWeight={500}
                      color="rgb(158, 158, 158)"
                      component="div"
                      marginTop={2}
                    >
                      <span>Last known location:</span>
                      <h3 className="character_location">
                        {character.location.name}
                      </h3>
                      <div style={{ marginTop: 16 }}>
                        <span>First seen in:</span>
                        {episodes.map((ep, index) => (
                          <h3 className="character_location" key={index}>
                            {character.id === ep.id ? ep.name : ""}
                          </h3>
                        ))}
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          ))}
        </ul>
      </div>
    </Container>
  );
}
