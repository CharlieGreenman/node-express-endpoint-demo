'use strict';
var client = require('../helpers/es');

module.exports = {
  GetAllPixelGrids: GetAllPixelGrids
}

function GetAllPixelGrids(req, res) {
  client.search({
    index:'grid',
    type:'grid',
    q: '*',
    // _sourceInclude: 'todo_id, tod
  })
}
