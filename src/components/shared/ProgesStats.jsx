import React from 'react'

import {
    Typography,
    Box,
    LinearProgress,
  } from "@mui/material";

function ProgesStats({perf,statVal}) {
  return (
    <>  <Box sx={{ width: "100%" }}>
    {/* Libellé "attaque" */}
    <Typography
    component="span"
      variant="body2"
      color="textPrimary"
      sx={{ mb: 0.5 }}
    >
      {perf}
    </Typography>

    {/* Barre de progression et pourcentage */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={statVal}
          sx={{
            height: 10, // ajuster la hauteur si nécessaire
            borderRadius: 5,
            "& .MuiLinearProgress-bar": {
              backgroundColor:
              statVal > 50 ? "green" : "red", // couleur personnalisée
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography component="span" variant="body2" color="textSecondary">
          {`${Math.round(statVal>=100 ? 95 :statVal)}%`}
        </Typography>
      </Box>
    </Box>
  </Box></>
  )
}

export default ProgesStats