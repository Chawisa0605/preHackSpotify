// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { FaRegClock } from "react-icons/fa6";

// function Track({ tracks }) {
//   return (
//     <>
//       {/* track header */}
//       <Box
//         sx={{ color: "grey", display: "flex", padding: "0px 70px", textAlign: "left" }}
//       >
//         <Box sx={{ display: "flex", flex: 2 }}>
//           <Typography sx={{ paddingRight: "15px", minWidth: "20px" }}>#</Typography>
//           <Typography sx={{ flex: 1 }}>Title</Typography>
//         </Box>
//         <Typography sx={{ flex: 1, minWidth: "150px" }}>Album</Typography>
//         <Typography sx={{ flex: 1, minWidth: "150px" }}>Date added</Typography>
//         <Box sx={{ width: "50px", textAlign: "right" }}>
//           <FaRegClock />
//         </Box>
//       </Box>
//       <hr
//         style={{
//           border: "0px",
//           height: "0.5px",
//           backgroundColor: "grey",
//           margin: "10px 60px",
//           opacity: "70%",
//         }}
//       />





//       {/* track list */}
//       {tracks.length === 0 ? (
//         <Box
//           sx={{ color: "grey", display: "flex", justifyContent: "center", padding: "20px" }}
//         >
//           <Typography>This Playlist Is Currently Empty</Typography>
//           <Typography variant="h6" sx={{ marginTop: "10px" }}>Let's create your playlist</Typography>
//         </Box>
//       ) : (
//         tracks.map((track, index) => (
//           <Box
//             key={index}
//             sx={{ color: "grey", display: "flex", padding: "0px 70px", textAlign: "left", marginBottom: "10px" }}
//           >
//             <Box sx={{ display: "flex", flex: 2 }}>
//               <Typography sx={{ paddingRight: "15px", minWidth: "20px" }}>{index + 1}</Typography>
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <img src={track.image} alt={track.title} style={{ width: "50px", borderRadius: "5px", marginRight: "10px" }} />
//                 <Box>
//                   <Typography>{track.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">{track.artist}</Typography>
//                 </Box>
//               </Box>
//             </Box>
//             <Typography sx={{ flex: 1, minWidth: "150px" }}>{track.album}</Typography>
//             <Typography sx={{ flex: 1, minWidth: "150px" }}>{track.dateAdded}</Typography>
//             <Typography sx={{ width: "50px", textAlign: "right" }}>{track.duration}</Typography>
//           </Box>
//         ))
//       )}
//     </>
//   );
// }

// export default Track;
