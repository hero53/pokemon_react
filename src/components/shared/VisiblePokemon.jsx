import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RemoveRedEye } from "@mui/icons-material";

import ProgesStats from "./ProgesStats";
import ButtonIcone from "./ButtonIcone";

function VisiblePokemon({ pokemon }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/detail/${pokemon.id}`);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ mt: 5 }}>
          <CardMedia
            component="img"
            alt={pokemon.name}
            height="250"
            style={{
              objectFit: "contain",
              maxHeight: "200px",
              width: "100%",
            }}
            image={pokemon.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              <ProgesStats perf="Attaque" statVal={pokemon.stats["attack"]} />
              <ProgesStats perf="Défense" statVal={pokemon.stats["defense"]} />
              <ProgesStats
                perf="Spécial Attaque"
                statVal={pokemon.stats["special_attack"]}
              />
              <ProgesStats
                perf="Spécial Défense"
                statVal={pokemon.stats["special_defense"]}
              />
              <ProgesStats perf="Vitesse" statVal={pokemon.stats["speed"]} />
            </Typography>
          </CardContent>
          
          <CardActions>
            <Button
              onClick={handleButtonClick}
              size="small"
              variant="contained"
              endIcon={<RemoveRedEye />}
              color="primary"
            >
              Informations
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default VisiblePokemon;
