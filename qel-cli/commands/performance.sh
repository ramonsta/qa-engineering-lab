#!/usr/bin/env bash
set -Eeuo pipefail

BASE="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$BASE"

docker run --rm -v "$PWD:/work" -w /work grafana/k6:latest run performance/k6/smoke.js
