import React, { useEffect, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import { Box } from "@mui/material";
function button() {
  return (
    <>
      <Box
        className="button"
        sx={{
          gap:"20px",
          paddingTop:"20px",
          paddingBottom:"0px",
          display:"flex",
          alignItems: 'center',
          paddingLeft:"60px"
        }}
      >
        <IoIosPlayCircle size={80} color="#2C5733" />
        <FaRegHeart size={30} color="grey" />
        <BsThreeDots size={30} color="grey" />
      </Box>
    </>
  );
}

export default button;
