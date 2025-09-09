#!/bin/sh
npm run prebuild
npm run build
git add *
git add .vitepress
git commit -m 'posting content'
git push
