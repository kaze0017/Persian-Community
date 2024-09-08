"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTheme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
    },
  });

export default defaultTheme;
