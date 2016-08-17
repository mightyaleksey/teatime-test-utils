#!/bin/sh

node_modules/.bin/static-server -p 8080 > /dev/null 2>&1 &
node_modules/.bin/wdio test-wdio/wdio.config.js
