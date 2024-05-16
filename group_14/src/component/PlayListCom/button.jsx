import React, { useEffect, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { PiShuffleFill } from "react-icons/pi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import { Box, Typography } from "@mui/material";
function button() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "70px",
          paddingTop: "25px",
          paddingBottom: "25px",
        }}
      >
        <Box
          sx={{
            gap: "25px",
            paddingBottom: "0px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "60px",
          }}
        >
          <IoIosPlayCircle size={80} color="#1BD760" />
          <PiShuffleFill size={35} color="#1BD760" />
          <MdOutlineDownloadForOffline size={40} color="grey" />
          <FiUserPlus size={35} color="grey" />
          <BsThreeDots size={35} color="grey" />
        </Box>
        <Box
          sx={{
            gap: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoSearch size={20} color="grey" />
          <Typography
            sx={{
              color: "grey",
              fontWeight: "500",
              fontSize: "15px",
              paddingLeft: "15px",
            }}
          >
            Album
          </Typography>
          <TfiMenuAlt size={20} color="grey" />
        </Box>
      </Box>
    </>
  );
}

export default button;
