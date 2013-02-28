var ok = require('okay');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var proxz = module.exports = function(cb) {
  proxz.fetch(ok(cb, function(body) {
    try{
      cb(null, proxz.parse(body));
    } catch(e) {
      cb(e);
    }
  }));
};

//parse the raw html
proxz.parse = function(contents) {
  var res = contents.split("unescape('")[1].split("')")[0];
  res = unescape(res);
  var fragment = res.split('("')[1].split('")')[0];
  var $ = cheerio.load(fragment);
  var cells = $(fragment).find('td').toArray();
  var addresses = [];
  var cell;
  while(cell = cells.shift()) {
    var address = $(cell).text();
    cell = $(cells.shift());
    address += ":" + $(cell).text();
    cells.shift();
    addresses.push(address);
  }
  return addresses;
};

proxz.url = 'http://www.proxz.com/proxy_list_high_anonymous_0.html';

proxz.fetch = function(cb) {
  request.get(proxz.url, ok(cb, function(res) {
    cb(null, res.body);
  }));
};
