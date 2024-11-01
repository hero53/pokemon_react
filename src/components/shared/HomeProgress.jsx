import React from 'react'

import {
    Stack,
    CircularProgress,
  } from "@mui/material";


function HomeProgress({visiblePokemons,allPokemons}) {
  return (
    <>
     {visiblePokemons.length < allPokemons.length && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <CircularProgress size="5rem" />
            </Stack>
          </div>
        )}
    </>
  )
}

export default HomeProgress