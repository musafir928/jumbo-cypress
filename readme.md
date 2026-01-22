# Cypress E2E Test Automation

This repository contains Cypress end-to-end tests for the web application, focusing on core functionalities such as product browsing, basket operations, and login flows.

---

## Project Setup

### Prerequisites
- Node.js >= 18
- npm >= 9
- Cypress (installed as dev dependency)

### Installation
```bash
git clone <repository-url>
cd <project-folder>
npm install

rest scripts
```

### folder structure
```
cypress/
  ├─ e2e/           # Test specifications
  │   └─ *cy.js 
  |
  ├─ pages/         # Page Object Model classes
  │   └─ *Page.js
  ├─ support/       # Custom commands and utilities
  ├─ fixtures/      # Sample data for tests
  └─ env           # Environment variables (optional)
```

### Todos / Future Improvements

1. TypeScript Migration

 - Convert all test files and page classes to TypeScript (*.ts)

2. More Page Classes

- Create dedicated classes for BasketPage, LoginPage, ProductPage, etc.

3. Negative Tests

- Login with invalid credentials
...

4. Use fixtures or external JSON to test multiple scenarios

5. Reusable Cypress Commands

 - For common actions like login, addToBasket, acceptCookies, etc.

6. Better Assertions

- Avoid cy.wait(), use .should() or .contains() for reliability

7. CI/CD Integration & Docker

- Run tests automatically on pull requests or pushes (GitHub Actions / GitLab CI)

8. Cross-browser Testing

- Chrome, Edge, Firefox

### Important Note:

- application have `.env.template` should be implemented differently for each environment
- example: `.env.local with NODE_ENV=local`