import React from "react";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
<Gallery />
      </Container>
    </div>
  );
};

export default App;
