import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Artist(){
    const params = useParams(); //keep all parameters from url (main.jsx)
    let id = Number(params.trackId); //choose trackId from params
    const [trackData, setTrackData] = useState();
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
        <>
        <Box sx={{backgroundColor:"white",color:"black", height:"100vh", alignContent:"center",textAlign:"center"}}>
            <Typography>Artist Page</Typography>
            {trackData && <Typography sx={{fontSize:"100px"}}>{trackData && trackData.artist_name}</Typography>}

        </Box>
        </>
    )
}
export default Artist;