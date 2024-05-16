import React from "react";
import { Box, Typography } from "@mui/material";
import { FaRegClock } from "react-icons/fa6";
import TrackFile from "./track";
import { Link } from "react-router-dom";

function titleBar({trackslist}) {
    console.log(trackslist);
  return (
    <>
      {/* title headerL */}
      <Box sx={{ pb: "0px" }}>
        <Box
          sx={{ color: "grey", display: "flex", padding: "0px 70px", textAlign: "left" }}
        >
          <Box sx={{ display: "flex", flex: 2 }}>
            <Typography sx={{ paddingRight: "15px", minWidth: "20px" }}>#</Typography>
            <Typography sx={{ flex: 1 }}>Title</Typography>
          </Box>
          <Typography sx={{ flex: 1, minWidth: "150px" }}>Album</Typography>
          <Typography sx={{ flex: 1, minWidth: "150px" }}>Date added</Typography>
          <Box sx={{ width: "50px", textAlign: "right" }}>
            <FaRegClock />
          </Box>
        </Box>
        <hr
          style={{
            border: "0px",
            height: "0.5px",
            backgroundColor: "grey",
            margin: "10px 60px",
            opacity: "70%",
          }}
        />
      </Box>
      
      {trackslist.map((item,key) => (
        <Link to={`/trackdetail/${item.id}`} style={{textDecoration: "none"}}>
            <TrackFile
                id={key + 1}
                title={item.title}
                dateAdded={item.date_added}
                albumName={item.album_name}
                artworkUrl={item.artwork_url}
                length={item.length}
                artistName={item.artist_name}
            />
        </Link>
      ))}
    </>
  );
}

export default titleBar;
