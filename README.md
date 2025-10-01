# Google Maps E2E Tests

This project contains automated end-to-end (E2E) tests for the Google Maps web application. It is built in TypeScript with the Playwright framework.

The goal of this project is to validate core user journeys, such as searching for locations and getting directions. We choose the Behavior-Driven Development (BDD) approach using Gherkin syntax because it is readable for both technical and non-technical stakeholders.

We use the POM (Page Object Model) Architecture. For each page, we have a class with the page's elements and actions. This is more maintainable and clear for new comers in the project.

We use the parameter type ```string``` to get variables from steps and add a custom parameter type to transform **should** and **shouldnot** in ```boolean``` values usable in tests. Parameter types keep the feature files readable and convert the matched string into the desired value.

## Getting Started

Follow these instructions to set up the project and run the tests on your local machine.

### 1. Prerequisites

You will need the following software installed:

* Node.js (LTS version is recommended)

* pnpm (You can also use npm or yarn by adjusting the commands below)

### 2. Installation

First, clone the repository and install the necessary dependencies, including the Playwright browser binaries.

```
# Clone the repository
git clone https://github.com/Elphame/OVH-Challenge.git
cd OVH-Challenge

# Install project dependencies
pnpm install

# Download the browsers needed by Playwright (Chromium, Firefox, WebKit)
pnpm exec playwright install
```

## Running the tests

Before running the tests, you have to generate the step definitions. You can do it with this command :

```
pnpm exec bddgen
```

You can run all the tests, use the UI or choose specific tests by tags.

### 1. All tests

```
pnpm exec playwright test
```

### 2. UI mode

```
pnpm exec playwright test --ui
```

### 3. By tag

```
# here you run all the tests with tag @search
pnpm exec playwright test --grep "@search"
```




## Test report

After a test run completes, an HTML report is generated. You can open it with this CLI :

```
pnpm exec playwright show-report
```

**NB:** We configure the project to store a trace, a screenshot and a video for each failed test.
