import React from "react";
import { Box, Typography } from "@mui/material";

function Artist({ track }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <img
          src={track.artist_image_url}
          alt=""
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "100px",
          }}
        />
        <Box
          sx={{
            paddingLeft: "15px",
            lineHeight: "1",
            alignContent:"center"
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "800" }}> Artist</Typography>
          <Typography sx={{ color: "white", fontWeight: "800" }}>
            {track.artist_name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Artist;
