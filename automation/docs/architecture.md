# Architecture

## Layers

1. **Tests** describe user behavior and assertions.
2. **Fixtures** provide initialized page objects and reusable test context.
3. **Page Objects** encapsulate locators and browser interactions.
4. **Shared services** provide logging, configuration, dates and API access.
5. **Data** keeps non-secret test inputs separate from test logic.

## Active test flow

```text
Playwright test -> fixture -> page object -> target application
                -> shared logger/config
                -> report, trace, video and screenshot
```

Appium and API directories are reserved roadmap modules. Their CI workflows
should only be introduced after an executable suite exists.
