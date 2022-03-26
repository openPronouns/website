#!/bin/zsh
rm -rf ./_build
mkdir ./_build
cp -r ./css/ ./_build/css
cp -r ./js/ ./_build/js
cp -r ./locale/ ./_build/wiki
cp -r ./wiki/ ./_build/wiki
cp ./index.html ./_build/index.html
cp ./oPronouns-logo.svg ./_build/oPronouns-logo.svg
cp ./oPronouns-logo.png ./_build/oPronouns-logo.png