"use client";
import React, { useEffect } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store/store";
import { getTheme } from "../../theme";
import { fetchTheme } from "@/lib/store/userData/profileSlice";
import defaultTheme from "@/theme";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Access the theme mode from the Redux store
  const dispatch = useDispatch<AppDispatch>();
  const [theme, setTheme] = React.useState(defaultTheme);

  const themeMode = useSelector((state: RootState) => state.profile.theme);

  useEffect(() => {
    dispatch(fetchTheme());
    setTheme(getTheme(themeMode));
    console.log("themeMode", themeMode);
  }, [themeMode, dispatch]);
  // Create the theme based on the mode

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
