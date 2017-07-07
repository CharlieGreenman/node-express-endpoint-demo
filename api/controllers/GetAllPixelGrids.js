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
    _sourceInclude: 'grid_id', 'grid', 'completed', 'author'
  }, function(error, respons){
    if(error) {
      res.end(JSON.stringify(error));
    } else {
      
    }
  })
}
