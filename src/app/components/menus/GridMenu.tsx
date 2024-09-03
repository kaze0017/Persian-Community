import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

interface GridMenuProps {
  categories: string[];
}

export default function GridMenu({ categories }: GridMenuProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid size={8}>
            <Paper sx={{ height: 75, width: 75 }}>{category}</Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
