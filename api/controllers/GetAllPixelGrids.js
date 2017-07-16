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
    _sourceInclude: 'grid_id, grid, datecreated, author, completed' 
  }, function(error, respons){
    if(error) {
      res.end(JSON.stringify(error));
    } else {
      var results = [];
      results = response.hits.hits.map(function(hit){ return hit._source });
      res.header('Content-Type', 'application/json');
      res.end(JSON.stringify(results));
      monitor(start, 'GetAllPixelGrids');
    }
  })
}
