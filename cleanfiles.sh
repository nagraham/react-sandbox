#!/usr/bin/env bash

# wipe out windows return characters
find {src,public}/ {package,tsconfig}.json webpack.config.js -type f | xargs  sed -i -e 's/\r//g'
