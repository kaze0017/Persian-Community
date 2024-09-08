"use client";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store/store";
import { setTheme, setThemeServer } from "@/lib/store/userData/profileSlice";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function ThemeSelector() {
  const { theme } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = async (event: SelectChangeEvent<string>) => {
    const selectedTheme = event.target.value as "dark" | "light";

    // Update the theme in the Redux store
    dispatch(setTheme(selectedTheme));

    // Save the theme preference to the server
    try {
      const result = await dispatch(setThemeServer(selectedTheme)).unwrap();
      if (result.success) {
        console.log("Theme preference saved successfully!");
      }
    } catch (error) {
      console.error("Failed to save theme preference:", error);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="theme-select-label">Theme</InputLabel>
          <Select
            labelId="theme-select-label"
            id="theme-select"
            value={theme}
            onChange={handleChange}
            label="Theme"
          >
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="light">Light</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ m: 1 }}>
          <Typography variant="body2" color="textPrimary">
            Select your preferred theme
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Select your preferred theme
          </Typography>
          <Typography variant="body2" color="primary">
            Select your preferred theme
          </Typography>
          <Typography variant="body2" color="secondary">
            Select your preferred theme
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
