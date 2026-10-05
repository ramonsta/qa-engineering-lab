#!/usr/bin/env bash
set -Eeuo pipefail

BASE="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$BASE"

if [[ ! -x node_modules/.bin/playwright ]]; then
  echo "Playwright is not installed. Run: npm ci" >&2
  exit 1
fi

node_modules/.bin/playwright test "$@"
