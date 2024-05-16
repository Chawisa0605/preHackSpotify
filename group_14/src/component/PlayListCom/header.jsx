import React from "react";
import { Box, Typography } from "@mui/material";

function header({ playlist }) {
  let sum = 0;
  for (let i = 0; i < playlist.tracks.length; i++) {
    const trackLength = playlist.tracks[i].length;
    const minutes = parseInt(trackLength.substring(14, 16));
    const seconds = parseInt(trackLength.substring(17, 19));
    sum += minutes * 60 + seconds;
  }
  return (
    <Box sx={{ display: "flex",
        padding:"30px 0px 30px 70px"}}>
            <img
                src={playlist.playlist.image_url}
                alt=""
                style={{
                    borderRadius:"5px",
                    width: "250px",
                    height:"250px",
                    boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.25)"
                }}
            />
            <Box sx={{ marginLeft: "30px",alignSelf: "flex-end"}}>
                <Typography sx={{ color:"white", fontWeight:"400" ,fontSize:"15px", marginBottom:"0px"}}>Private Playlist</Typography>
                <Typography sx={{ color:"white", fontSize:"70px" , marginTop:"0px", marginBottom:"0px", fontWeight:"800"  }}>{playlist.playlist.title}</Typography>
                <Box sx={{ display: "flex",}}>
                    <Box sx={{ display: "flex", }}>
                        <Typography sx={{ color:"white", fontWeight:"600" }}>{playlist.playlist.creator}</Typography>
                        <Typography sx={{ color:"white", fontWeight: "800", }}>&nbsp;.&nbsp; </Typography>
                        <Typography sx={{ color:"white" }}>{playlist.tracks.length} songs</Typography>
                        <Typography sx={{ color:"white", fontWeight: "800"}}>,&nbsp;</Typography>
                        <Typography sx={{ color:"white" }}>{Math.floor(sum / 60)}:{(sum % 60).toString().padStart(2, '0')}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
  );
}

export default header;
