#!/usr/bin/env bash

set -Eeuo pipefail

echo "=================================================="
echo " QA ENGINEERING LAB - ENTERPRISE REALIGN"
echo "=================================================="

ROOT="."

echo
echo "Criando estrutura de diretórios..."

# GitHub
mkdir -p "$ROOT/.github/workflows"

# Playwright
mkdir -p "$ROOT/playwright"/{tests,pages,fixtures,data,utils,reports}

# Appium
mkdir -p "$ROOT/appium"/{tests,pages,capabilities,drivers}

# API
mkdir -p "$ROOT/api"/{postman,restassured,swagger,collections,environments}

# Performance
mkdir -p "$ROOT/performance"/{k6,scripts,reports,scenarios}

# Docker
mkdir -p "$ROOT/docker"/{compose,images}

# Docs
mkdir -p "$ROOT/docs"/{architecture,images,reports}

####################################################
# Migração github-actions -> .github/workflows
####################################################

if [ -d "$ROOT/github-actions" ]; then

    echo
    echo "Migrando arquivos de github-actions..."

    shopt -s nullglob

    for file in "$ROOT/github-actions"/*.yml "$ROOT/github-actions"/*.yaml
    do
        echo "Movendo: $(basename "$file")"
        mv "$file" "$ROOT/.github/workflows/"
    done

    shopt -u nullglob

    rmdir "$ROOT/github-actions" 2>/dev/null || true
fi

####################################################
# Workflows
####################################################

create_workflow () {

    local file="$1"

    if [ ! -f "$ROOT/.github/workflows/$file" ]; then
        touch "$ROOT/.github/workflows/$file"
        echo "Criado: $file"
    else
        echo "Mantido: $file"
    fi
}

echo
echo "Verificando workflows..."

create_workflow "ci.yml"
create_workflow "nightly-regression.yml"
create_workflow "performance-k6.yml"
create_workflow "appium.yml"
create_workflow "api-tests.yml"

####################################################
# README's
####################################################

touch "$ROOT/README.md"

[ -f "$ROOT/playwright/README.md" ] || echo "# Playwright" > "$ROOT/playwright/README.md"

[ -f "$ROOT/appium/README.md" ] || echo "# Appium" > "$ROOT/appium/README.md"

[ -f "$ROOT/api/README.md" ] || echo "# API Testing" > "$ROOT/api/README.md"

[ -f "$ROOT/performance/README.md" ] || echo "# Performance Testing" > "$ROOT/performance/README.md"

####################################################
# .gitignore
####################################################

if [ ! -f "$ROOT/.gitignore" ]; then

cat <<EOF > "$ROOT/.gitignore"
node_modules/
playwright-report/
test-results/
allure-results/
allure-report/
coverage/
dist/
.env
EOF

fi

####################################################
# Resultado
####################################################

echo
echo "=================================================="
echo " Estrutura atual"
echo "=================================================="

if command -v tree >/dev/null 2>&1
then
    tree -L 3
else
    find .
fi

echo
echo "Realinhamento concluído com sucesso!"