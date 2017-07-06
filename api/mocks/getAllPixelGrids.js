'use strict';

module.exports = {
  getAllPixelGrids: getAllPixelGrids
}

function getAllPixelGrids(req, res, next) {
  res.json([
    {
      grid_id: 0,

    }
  ])
}
