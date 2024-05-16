import React from "react";
import { Box, Typography } from "@mui/material";

function track({ id, title, dateAdded, albumName, artworkUrl, length, artistName }) {

    const time = length?.substring(14,19);

    function formatDate(dateAdded) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateAdded);
        return date.toLocaleDateString('en-US', options);
      }
  return (
    <>
      {/* track list */}
      <Box
        sx={{
          color: "grey", display: "flex", padding: "10px 70px", textAlign: "left", alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box sx={{ display: "flex", flex: 2, alignItems: "center" }}>
          <Typography sx={{ paddingRight: "15px", minWidth: "20px" }}>{id}</Typography>
          <Box sx={{ display: "flex" }}>
            <img src={artworkUrl} style={{ width: "50px", height:"50px", borderRadius: "5px" }} />
            <Box sx={{ pl: "15px" }}>
              <Typography sx={{ color: "white" }}>{title}</Typography>
              <Typography>{artistName}</Typography>
            </Box>
          </Box>
        </Box>
        <Typography sx={{ flex: 1, minWidth: "150px" }}>{albumName}</Typography>
        <Typography sx={{ flex: 1, minWidth: "150px" }}>{formatDate(dateAdded)}</Typography>
        <Typography sx={{ width: "50px", textAlign: "right" }}>{time}</Typography>
      </Box>
    </>
  );
}

export default track;
