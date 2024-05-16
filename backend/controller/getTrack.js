const connection = require("../services/database");

const getTrack = async (req, res) => {
  const trackId = req.query.trackId;
  if (!trackId) {
    return res.json({
      success: false,
      data: null,
      error: "track_id is invalid",
    });
  }
  try {
    const track = await connection
      .promise()
      .query(
        `SELECT id,track_title,length,artwork_url,artist_image_url,artist_name,released_year,lyrics from c13_track_details WHERE id = ${trackId}`
      );
    const trackData = track[0][0];

    const playlist_Id = await connection
      .promise()
      .query(`SELECT playlist_id from c12_tracks WHERE id = ${trackId}`);
    const playlistIdData = playlist_Id[0][0];
    
    const data = {
      id: trackData.id,
      track_title: trackData.track_title,
      length: trackData.length,
      artwork_url: trackData.artwork_url,
      artist_image_url: trackData.artist_image_url,
      artist_name: trackData.artist_name,
      released_year: trackData.released_year,
      lyrics: trackData.lyrics,
      playlist_id: playlistIdData.playlist_id,
    };
    if (!data) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "no track found",
      });
    }
    return res.json({
      success: true,
      data: data,
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
module.exports = getTrack;
