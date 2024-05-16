import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Artist from "../component/TrackDetailCom/artist";
import Header from "../component/TrackDetailCom/header";
import Button from "../component/TrackDetailCom/button";
import Lyrics from "../component/TrackDetailCom/lyrics";
import Navbar from "../component/PlayListCom/navbar";
import axios from "axios";

function TrackDetail() {
  //Backend integration
  const params = useParams(); //keep all parameters from url (main.jsx)
  let id = Number(params.trackId); //choose trackId from params
  const [trackData, setTrackData] = useState();
  if (!id) {
    id = Math.floor(Math.random() * 10) + 1;
  }
  const getTrack = async () => {
    const tracks = await axios.get(
      `http://localhost:3000/trackdetail?trackId=${id}`
    );
    console.log();
    setTrackData(tracks.data.data);
  };

  useEffect(() => {
    if (id) {
      getTrack();
    }
  }, []); //work when refresh page

  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,52,52,1) 100%)",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(0deg, rgba(59,58,59,1) 0%, rgba(112,112,112,1) 100%)",
        }}
      >
        {trackData && <Navbar track={trackData.playlist_id} />}
        {trackData && <Header track={trackData} />}
      </Box>
      <Button />
      <div style={{ display: "flex" }}>
        {trackData && <Lyrics track={trackData} />}
        <Link to={`/artist/${id}`} style={{textDecoration:"none"}}>{trackData && <Artist track={trackData} />}</Link>
      </div>
    </Box>
  );
}

export default TrackDetail;
