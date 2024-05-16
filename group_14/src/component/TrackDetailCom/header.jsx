import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
function header({ track }) {
  return (
    <Box sx={{ display: "flex", padding: "40px 0px 30px 70px" }}>
      <img
        src={track.artwork_url}
        alt=""
        style={{
          width: "250px",
          boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.25)",
        }}
      />
      <Box sx={{ marginLeft: "30px", alignSelf: "flex-end" }}>
        <Typography style={{ color: "white", fontWeight: "600" }}>Song</Typography>
        <Typography
          style={{
            color: "white",
            fontSize: "50px",
            marginTop: "10px",
            marginBottom: "10px",
            fontWeight:"800"
          }}
        >
          {track.track_title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to={`/artist/${track.id}`} style={{ textDecoration: "none" }}>
            <img
              src={track.artist_image_url}
              alt=""
              style={{
                width: "30px",
                borderRadius: "100px",
              }}
            />
          </Link>
          <Box sx={{ display: "flex", marginLeft: "10px", gap: "5px" }}>
            <Link to={`/artist/${track.id}`} style={{ textDecoration: "none" }}>
              <Typography style={{ color: "white", fontWeight: "600" }}>
                {track.artist_name}
              </Typography>
            </Link>
            <Typography style={{ color: "white", fontWeight: "800" }}>.</Typography>
            <Typography style={{ color: "white" }}>{track.released_year}</Typography>
            <Typography style={{ color: "white", fontWeight: "800" }}> .</Typography>
            <Typography style={{ color: "white" }}>{track.length.substring(14, 19)}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default header;
