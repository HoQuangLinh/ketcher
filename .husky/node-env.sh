#!/usr/bin/env sh

if ! command -v npm >/dev/null 2>&1; then
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

  if [ -s "$NVM_DIR/nvm.sh" ]; then
    # shellcheck disable=SC1090
    . "$NVM_DIR/nvm.sh"
  fi
fi

if ! command -v npm >/dev/null 2>&1; then
  for node_bin in "$HOME"/.nvm/versions/node/*/bin; do
    if [ -d "$node_bin" ]; then
      export PATH="$node_bin:$PATH"
    fi
  done
fi

export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
