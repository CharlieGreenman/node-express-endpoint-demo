'use strict';

module.exports = {
  GetAllPixelGrids: GetAllPixelGrids
}

function GetAllPixelGrids(req, res, next) {
  res.json([
    {
      grid_id: 0,
      grid: "super mario",
      datecreated: "2017-07-07T01:20:05+00:00",
      author: "charlie",
      completed: false
    },
    {
      grid_id: 1,
      grid: "donkey kong",
      datecreated: "2017-07-11T01:20:05+00:00",
      author: "mathew",
      completed: false
    }
  ])
}
