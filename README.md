# QA Engineering Lab

Professional Quality Engineering laboratory focused on reliable test automation,
continuous validation and observable test results.

## Current capabilities

- Playwright end-to-end tests using Page Objects and fixtures
- Desktop Chromium and mobile viewport projects
- Pull request and push validation with GitHub Actions
- Scheduled nightly regression workflow
- k6 performance smoke test
- Failure screenshots, videos, traces and HTML reports
- Experimental QEL command-line toolkit

## Architecture

```text
qa-engineering-lab/
├── .github/workflows/       # CI, nightly regression and k6
├── automation/
│   ├── playwright/          # Web tests, pages, fixtures and test data
│   └── shared/              # Reusable configuration, logging and API helpers
├── api/                     # API testing roadmap
├── appium/                  # Mobile testing roadmap
├── docker/                  # Container definitions
├── docs/                    # Architecture documentation
├── performance/k6/          # Performance smoke tests
└── qel-cli/                 # Quality Engineering Lab CLI
```

The active implementation lives under `automation/`. API and Appium remain
documented roadmap modules until executable test suites are added.

## Requirements

- Node.js 20+
- npm 10+
- Docker (optional, required for the local k6 command)

## Setup

```bash
npm ci
npm run install:browsers
```

## Run tests

```bash
npm test
npm run test:smoke
npm run test:login
npm run test:headed
```

Open the last HTML report with:

```bash
npm run test:report
```

Run the k6 smoke test with Docker:

```bash
docker run --rm -v "$PWD:/work" -w /work grafana/k6:latest run performance/k6/smoke.js
```

## Continuous integration

| Workflow | Trigger | Purpose |
|---|---|---|
| Playwright Tests | Push, pull request or manual | Run the web suite |
| Nightly Regression | Daily at 06:00 UTC or manual | Execute scheduled regression |
| k6 Performance Smoke Test | Performance changes or manual | Validate the k6 scenario |

Scheduled workflows can be disabled by GitHub after a long period without
repository activity. Re-enable them from the Actions page when necessary.

## Roadmap

- Implement Appium tests and emulator-ready CI
- Add executable API contract tests
- Add Allure reporting and quality metrics
- Expand Docker support
- Convert QEL CLI placeholders into production commands
