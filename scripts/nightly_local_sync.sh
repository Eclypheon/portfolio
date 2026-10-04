#!/usr/bin/env bash
set -euo pipefail

# Ensure full user PATH and HOME for launchd daemon execution
export HOME="${HOME:-/Users/neokester}"
export PATH="/Users/neokester/.pyenv/shims:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${PATH:-}"

# Navigate to project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo "=== [$(date '+%Y-%m-%d %H:%M:%S')] Starting Local Geospatial Intelligence Briefing Run ==="

# 1. Execute generation script
python3 scripts/generate_musing.py

# 2. Check for git changes
if git diff --quiet src/data/musingsData.ts src/data/musings.json; then
    echo "[Git] No new musings detected. Nothing to commit."
    exit 0
fi

# 3. Stage and commit
git add src/data/musingsData.ts src/data/musings.json
git commit -m "chore(musings): nightly geospatial intelligence brief synthesized by Qwen (LM Studio)"

# 4. Pull rebase and push
git pull --rebase origin main || true
git push origin main

echo "=== [$(date '+%Y-%m-%d %H:%M:%S')] Local Geospatial Run & Push Completed Successfully ==="
