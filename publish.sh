#!/bin/sh
npm run build
git add *
git add .vitepress
git commit -m 'posting content'
git push
