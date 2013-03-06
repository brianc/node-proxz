#proxz

[![Build Status](https://travis-ci.org/brianc/node-proxz.png?branch=master)](https://travis-ci.org/brianc/node-proxz)

Fetch a list of proxies from http://proxz.com

## api

`var proxz = require('proxz')`

### proxz(callback(err, proxies))

A function which takes a single callback as an argument.  Callback is called with an array of proxy addresses in the form of:

`['192.16.0.1:8080', '127.0.0.1:80']`

### LICENSE
MIT
