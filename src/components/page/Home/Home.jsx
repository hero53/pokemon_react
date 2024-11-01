import React, { useEffect, useState, useCallback } from "react";
import ProgesStats from "./../../shared/ProgesStats";

import { Grid, TextField, Box } from "@mui/material";
import HomeSkeleton from "../../shared/HomeSkeleton";
import HomeProgress from "./../../shared/HomeProgress";
import VisiblePokemon from "./../../shared/VisiblePokemon";
import PokemonService from "../../../services/Pokemon.service";

const Home = () => {
  const [allPokemons, setAllPokemons] = useState([]); // Tous les Pokémon récupérés une fois
  const [visiblePokemons, setVisiblePokemons] = useState([]); // Pokémon affichés
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);
  const limit = 6;
  const fetched = React.useRef(false); // variable de contrôle

  const fetchAllPokemons = async () => {
    if (fetched.current) return; // empêche l'appel multiple
    fetched.current = true;
    try {
      const pokemons = await PokemonService.fetchAllPokemons();
      setAllPokemons(pokemons);
      setVisiblePokemons(pokemons.slice(0, limit)); // Affiche les premiers Pokémon
      setLoading(false);
    } catch (error) {
      console.error("Erreur de chargement :", error);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);


  const loadMorePokemons = useCallback(() => {
    const newPage = page + 1;
    const newVisiblePokemons = allPokemons.slice(0, newPage * limit);

    setVisiblePokemons(newVisiblePokemons);
    setPage(newPage);

    if (newVisiblePokemons.length >= allPokemons.length) {
      setHasMore(false);
    }
  }, [page, allPokemons, limit]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100 &&
        visiblePokemons.length < allPokemons.length
      ) {
        loadMorePokemons();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visiblePokemons, allPokemons, loadMorePokemons]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        
        <Grid container spacing={2}>
          {loading ? (
            <HomeSkeleton />
          ) : (
            
            visiblePokemons.map((pokemon) => <VisiblePokemon pokemon={pokemon} key={pokemon.id} />)
          )}
        </Grid>
        <HomeProgress
          visiblePokemons={visiblePokemons}
          allPokemons={allPokemons}
        />
      </Box>
    </>
  );
};

export default Home;
