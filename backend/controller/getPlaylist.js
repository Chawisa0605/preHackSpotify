const connection = require("../services/database");

const getPlaylist = async (req, res) => {
  const playlistId = req.query.playlistId;
  if (!playlistId) {
    return res.json({
      success: false,
      data: null,
      error: "playlist_Id is invalid",
    });
  }
  try {
    const playlist = await connection
      .promise()
      .query(
        `SELECT id,title,creator,image_url from c12_playlists WHERE id = ${playlistId}`
      );
    const trackpl = await connection
      .promise()
      .query(
        `SELECT id,title,date_added,album_name,artwork_url,length,artist_name from c12_tracks WHERE playlist_id = ${playlistId}`
      );
    const check = playlist[0][0];
    if (!check) {
      return res.json({
        success: false,
        data: null,
        error: "no playlist found",
      });
    }
    const playlistData = {
      playlist: playlist[0][0],
      tracks: trackpl[0],
    };
    return res.json({
      success: true,
      data: playlistData,
      error: null,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      data: null,
      error: "Internal server error",
    });
  }
};
module.exports = getPlaylist;
