const database = require('../database/database');

exports.getVisitors = async (req, res) => {
  try {
    const result = await database.pool.query('SELECT * FROM visitors_map');
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Error Occured while getting visitors map data' + error.message,
    });
  }
};
