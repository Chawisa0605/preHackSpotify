import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Navbar from "../component/PlayListCom/navbar";
import Header from "../component/PlayListCom/header";
import Button from "../component/PlayListCom/button";
import Track from "../component/PlayListCom/track";
import TitleBar from "../component/PlayListCom/titleBar";
import { useParams } from "react-router-dom";

function PlayList() {
  const params = useParams();
  let id = Number(params.playlistId);
  const [playlistData, setPlaylistData] = useState();
  if(!id){
    id = Math.floor(Math.random() * 5) + 1;
  }
  const getplaylist = async () => {
    const playlists = await axios.get(
      `http://localhost:3000/playlist?playlistId=${id}`
    );
    setPlaylistData(playlists.data.data);
    console.log(playlists.data.data.tracks);
  };

  useEffect(() => {

    if (id) {
      getplaylist();
    }
    // console.log(playlistData.tracks);
  }, []);
  // console.log(playlistData);
  // console.log(playlistData)
  return (
    <>
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
          <Navbar />
          {playlistData && <Header playlist={playlistData} />}
        </Box>
        <Button />
        <Box sx={{ pb: "50px" }}>
          {playlistData && <TitleBar trackslist={playlistData.tracks} />}
        </Box>
      </Box>
    </>
  );
}

export default PlayList;
