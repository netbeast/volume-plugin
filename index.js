#!/usr/bin/env node

var fs = require('fs')

var express = require('express')
var cmd = require('commander')

cmd
.version('0.1.42')
.option('-p, --port <n>', 'Port to start the HTTP server', parseInt)
.parse(process.argv)

var app = express()

app.use(express.static('public'))

var server = app.listen(cmd.port || 4000, function () {
  console.log('Netbeast plugin started on %s:%s',
  server.address().address,
  server.address().port)
})
