'use strict';

var ElasticSearch = require('elasticsearch');
var client = new ElasticSearch.Client({
  host: 'http://localhost:9200',
  log: 'error'
})
