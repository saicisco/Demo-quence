# Demo-quence Project Documentation

This project is an automated testing suite for the TXT Quence homepage using Playwright and GitHub Copilot Agents with Model Context Protocol (MCP).

## Project Overview

Demo-quence is a comprehensive testing framework for the [TXT Quence website](https://quence.txtgroup.com/home), a Software Quality Engineering company. The project leverages Playwright for end-to-end browser testing and integrates with GitHub Copilot Agents to automate test planning, generation, and healing.

## Project Structure

```
.
├── .github/
│   ├── agents/              # GitHub Copilot Agent configurations
│   │   ├── playwright-test-generator.agent.md
│   │   ├── playwright-test-healer.agent.md
│   │   └── playwright-test-planner.agent.md
│   └── workflows/
│       └── copilot-setup-steps.yml
├── .vscode/
│   └── mcp.json            # Model Context Protocol configuration
├── specs/                  # Test plan documentation
│   ├── quence-homepage-test.plan.md
│   └── README.md
├── tests/                  # Playwright test files
│   ├── seed.spec.ts       # Test seed/template file
│   └── navigation/
│       └── main-navigation.spec.ts
├── playwright-report/      # Test execution reports
├── test-results/          # Test run results
├── .gitignore
├── package.json
└── playwright.config.ts
```

## Key Components

### Test Plans

Test plans are stored in the `specs/` directory as Markdown files. The main test plan is `specs/quence-homepage-test.plan.md`, which contains:

- Application overview
- Comprehensive test scenarios organized by feature area:
  - Navigation and Accessibility
  - Hero Section and Carousels
  - Content Sections and Links
  - Cross-Browser and Responsive Testing
  - Error Handling and Edge Cases

### Test Files

Test implementations are located in the `tests/` directory:

- `tests/seed.spec.ts` - Template for generating new tests
- `tests/navigation/main-navigation.spec.ts` - Main navigation menu functionality tests

### GitHub Copilot Agents

Three specialized agents assist with test automation:

1. **Playwright Test Planner** (`.github/agents/playwright-test-planner.agent.md`)
   - Explores web applications
   - Analyzes user flows
   - Creates comprehensive test plans
   - Uses Claude Sonnet 4 model

2. **Playwright Test Generator** (`.github/agents/playwright-test-generator.agent.md`)
   - Converts test plans into executable Playwright tests
   - Simulates user interactions
   - Generates robust test code
   - Uses Claude Sonnet 4 model

3. **Playwright Test Healer** (`.github/agents/playwright-test-healer.agent.md`)
   - Debugs failing tests
   - Identifies root causes of failures
   - Fixes broken tests automatically
   - Uses Claude Sonnet 4 model

### Configuration Files

- `playwright.config.ts` - Playwright configuration with support for Chromium, Firefox, and WebKit
- `.vscode/mcp.json` - MCP server configuration for Playwright tools
- `package.json` - Project dependencies including `@playwright/test`

## Getting Started

### Installation

```sh
npm install
```

### Install Playwright Browsers

```sh
npx playwright install --with-deps
```

### Running Tests

Run all tests:
```sh
npx playwright test
```

Run specific test file:
```sh
npx playwright test tests/navigation/main-navigation.spec.ts
```

View test report:
```sh
npx playwright show-report
```

Run tests in UI mode (interactive):
```sh
npx playwright test --ui
```

Run tests in headed mode (see browser):
```sh
npx playwright test --headed
```

## Test Coverage

The test suite covers:

- **Navigation**: Main menu, dropdowns, language switcher, social/contact links
- **Hero Elements**: Banner carousel, partner carousel navigation
- **Content**: Service offerings, company information, join/contact sections
- **Responsive Design**: Mobile layouts, performance testing
- **Error Handling**: Broken links, input validation, content integrity

## CI/CD Integration

The project includes a GitHub Actions workflow (`.github/workflows/copilot-setup-steps.yml`) that:

- Sets up Node.js environment
- Installs dependencies
- Installs Playwright browsers
- Prepares for test execution

## Model Context Protocol (MCP)

The project uses MCP to connect GitHub Copilot with Playwright testing tools. The `playwright-test` server provides browser automation capabilities accessible to the AI agents.

## Best Practices

- Tests are organized by feature area in subdirectories
- Each test includes references to its source test plan
- Tests use descriptive names and follow consistent patterns
- Assertions verify both visibility and functionality
- Tests maintain independence and can run in any order

## Contributing

When adding new tests:

1. Document test scenarios in `specs/` directory
2. Reference the appropriate seed file
3. Use GitHub Copilot agents to generate test code
4. Verify tests pass before committing
5. Follow the naming convention: `feature-name.spec.ts`

## Useful Commands

```sh
# Run tests in debug mode
npx playwright test --debug

# Run a specific test by title
npx playwright test -g "test title"

# Generate test report
npx playwright test --reporter=html

# Update snapshots
npx playwright test --update-snapshots

# Run tests on specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Troubleshooting

If tests fail:

1. Check the test report: `npx playwright show-report`
2. Run tests with `--headed` flag to see browser actions
3. Use `--debug` flag to step through tests
4. Review screenshots and videos in `test-results/`
5. Use the Playwright Test Healer agent to auto-fix issues

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test Runner](https://playwright.dev/docs/intro)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [TXT Quence Website](https://quence.txtgroup.com/home)
