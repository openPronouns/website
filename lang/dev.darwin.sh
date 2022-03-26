#!/bin/zsh
tinygo build -o ../wasm/locale.wasm -target wasm ./wasm.go
cp /usr/local/Cellar/tinygo/0.22.0/targets/wasm_exec.js ../js/wasm_exec.js