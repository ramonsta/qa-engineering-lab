#!/usr/bin/env bash
set -Eeuo pipefail

echo "QEL environment diagnostics"

status=0
for command in node npm npx git; do
  if command -v "$command" >/dev/null 2>&1; then
    printf '  [ok] %s: %s\n' "$command" "$(command -v "$command")"
  else
    printf '  [missing] %s\n' "$command"
    status=1
  fi
done

if command -v docker >/dev/null 2>&1; then
  printf '  [ok] docker: %s\n' "$(command -v docker)"
else
  echo '  [optional] docker is not installed'
fi

exit "$status"
