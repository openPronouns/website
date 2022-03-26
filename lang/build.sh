#!/bin/zsh
GOOS=js GOARCH=wasm go build -o ${PWD}/_build/wasm/lang.wasm