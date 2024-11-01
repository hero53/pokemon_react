import React from "react";
import { Grid, Skeleton } from "@mui/material";
function HomeSkeleton() {
  return (
    <>
    

      {Array.from({ length: 12 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Skeleton variant="rectangular" width="100%" height={300} />
            </Grid>
          ))}
    </>
  );
}

export default HomeSkeleton;
