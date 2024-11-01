import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import PokemonService from "../../../services/Pokemon.service";
import ProgesStats from "../../shared/ProgesStats";
import HomeSkeleton from "../../shared/HomeSkeleton";

function PokemonInfo() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate();
  console.log(useParams());

  const [pokemon, setPokemon] = useState(null);
  const [pokemonId, setPokemonId] = useState(id);

  const getPokemon = async (pokemonId) => {
    try {
      console.log("pokemonid", pokemonId);

      const pokemon = await PokemonService.pokemonById(pokemonId);
      console.log(pokemon);

      setPokemon(pokemon);
    } catch (error) {
      console.error("Erreur de chargement :", error);
    }
  };

  const handleButtonClickNext = useCallback(() => {
    const newPokemonId = parseInt(pokemonId, 10) + 1;
    setPokemonId(newPokemonId);
    navigate(`/detail/${newPokemonId}`);
  }, [pokemonId, navigate]);

  const handleButtonClickPrev = useCallback(() => {
    if (pokemonId > 1) {
      const newPokemonId = parseInt(pokemonId, 10) - 1;
      setPokemonId(newPokemonId);
      navigate(`/detail/${newPokemonId}`);
    }
  }, [pokemonId, navigate]);

  useEffect(() => {
    getPokemon(pokemonId);
  }, [pokemonId]);

  if (!pokemon) {
    return <HomeSkeleton/> ;
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Card sx={{ mt: 5 }}>
              <CardMedia
                component="img"
                alt={pokemon.name}
                height="300"
                style={{
                  objectFit: "contain",
                  maxHeight: "280px",
                  width: "100%",
                }}
                image={pokemon.image}
              />
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card sx={{ mt: 5 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.name}
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  <ProgesStats
                    perf="Attaque"
                    statVal={pokemon.stats["attack"]}
                  />
                  <ProgesStats
                    perf="Défense"
                    statVal={pokemon.stats["defense"]}
                  />
                  <ProgesStats
                    perf="Spécial Attaque"
                    statVal={pokemon.stats["special_attack"]}
                  />
                  <ProgesStats
                    perf="Spécial Défense"
                    statVal={pokemon.stats["special_defense"]}
                  />
                  <ProgesStats
                    perf="Vitesse"
                    statVal={pokemon.stats["speed"]}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            sx={{ mt: 5 }}
            item
            xs={12}
            lg={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              sx={{ marginRight: "10px" }}
              onClick={handleButtonClickPrev}
            >
              Précedant
            </Button>
            <Button variant="contained" onClick={handleButtonClickNext}>
              Suivant
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PokemonInfo;
