fs = require "fs"
ok = require "okay"

proxz = require "#{__dirname}/../"

describe "proxz", ->
  before ->
    @contents = fs.readFileSync "#{__dirname}/proxz.html", "utf8"

  it "parses", ->
    addresses = proxz.parse @contents
    addresses.length.should.eql 30
    addresses.indexOf('219.243.220.100:8080').should.eql 0

  it "works", (done) ->
    proxz ok done, (proxies) ->
      proxies.length.should.not.eql 0
      done()
