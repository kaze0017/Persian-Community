import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Counter from "./components/counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <Box className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Persian Community</h1>
          <p className="text-lg">Introduces the Persian Business, Communities, and Events in Ottawa</p>
          <Counter />
        </Box>
      </Container>
    </main>
  );
}
