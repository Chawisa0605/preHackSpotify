// import { createBox } from "@mui/material/group_14/styles";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

function lyrics({ track }) {
  return (
    <>
      <Box
        sx={{
          paddingLeft: "70px",
          paddingTop: "20px",
          paddingBottom: "50px",
          marginTop: "0px",
          width:"50%"

        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize:"25px",
            fontWeight: "800",
            paddingBottom:"20px"
          }}
        >
          Lyrics
        </Typography>
        <Box
          sx={{
            textAlign: "left",
            whiteSpace: "pre-wrap",
            color: "white",
            lineHeight: "2"
          }}
        >
          {track.lyrics}
        </Box>
      </Box>
    </>
  );
}

export default lyrics;
