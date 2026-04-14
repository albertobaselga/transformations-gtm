#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SERVICE_NAME="lost-leads-tool.service"
SYSTEMD_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/systemd/user"
TEMPLATE_PATH="$PROJECT_ROOT/systemd/${SERVICE_NAME}.template"
UNIT_PATH="$SYSTEMD_DIR/$SERVICE_NAME"
NODE_BIN="${NODE_BIN:-$(command -v node)}"

mkdir -p "$SYSTEMD_DIR"

sed \
  -e "s|__PROJECT_ROOT__|$PROJECT_ROOT|g" \
  -e "s|__NODE_BIN__|$NODE_BIN|g" \
  "$TEMPLATE_PATH" > "$UNIT_PATH"

systemctl --user daemon-reload
systemctl --user enable --now "$SERVICE_NAME"
systemctl --user restart "$SERVICE_NAME"
systemctl --user --no-pager --full status "$SERVICE_NAME"
