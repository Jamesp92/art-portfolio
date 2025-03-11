// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const dummyArtworks = [
      {
        id: 1,
        title: "Artwork 1",
        imageUrl: "https://picsum.photos/600/400?random=1",
      },
      {
        id: 2,
        title: "Artwork 2",
        imageUrl: "https://picsum.photos/600/400?random=2",
      },
      {
        id: 3,
        title: "Artwork 3",
        imageUrl: "https://picsum.photos/600/400?random=3",
      },
    ];

    setArtworks(dummyArtworks);
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={2}>
        {artworks.map((art) => (
          <img
            key={art.id}
            src={art.imageUrl}
            alt={art.title}
            style={{ width: "100%", borderRadius: "4px" }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Gallery;
