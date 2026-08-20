#!/usr/bin/env bash
set -Eeuo pipefail

BASE="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$BASE"

echo "Validating project configuration..."
node --check playwright.config.js

if [[ ! -x node_modules/.bin/playwright ]]; then
  echo "Playwright is not installed. Run: npm ci" >&2
  exit 1
fi

node_modules/.bin/playwright test --list

echo "Project configuration is valid."
