import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { IoChevronBackCircle } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function navbar({track}) {
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "70px",
          paddingRight: "70px",
          paddingTop: "20px",
          paddingBottom: "0px",
        }}
      >
        <Box>
          <Link to={`/playlist/${track}`} style={{ textDecoration: "none" }}>
          <IoChevronBackCircle size={35} color="black" opacity="0.8" />
          </Link>
          <IoChevronForwardCircle size={35} color="black" opacity="0.5" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IoNotificationsCircle size={30} color="black" opacity="0.8" />
          <IoPeopleCircleSharp size={30} color="black" opacity="0.8" />
          <FaUserCircle size={25} color="#1BD760" opacity="0.8" />
        </Box>
      </Box>
    </>
  );
}

export default navbar;
