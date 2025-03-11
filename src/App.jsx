import React from "react";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the Art Portfolio
        </Typography>
      </Container>
    </div>
  );
};

export default App;
