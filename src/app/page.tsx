"use client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Counter from "./components/counter";
import { useEffect } from "react";

export default function Home() {
  // console.log("Service Worker is registered");
  // useEffect(() => {
  //   if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((registration) => {
  //         console.log(
  //           "Service Worker registered with scope:",
  //           registration.scope
  //         );
  //       })
  //       .catch((error) => {
  //         console.log("Service Worker registration failed:", error);
  //       });
  //   }
  // }, []); 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <Box className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Persian Community</h1>
          <p className="text-lg">
            Introduces the Persian Business, Communities, and Events in Ottawa
          </p>
          <Counter />
        </Box>
      </Container>
    </main>
  );
}
