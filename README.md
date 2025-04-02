# FinanceHouse

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deploy Angular App on GitHub Pages

Deploying an Angular application on GitHub Pages is a straightforward process. Follow these steps to get your Angular app live on GitHub Pages.

### Step 1: Create or Prepare Your Angular Project

If you don't have an Angular project yet, create one using Angular CLI:

```bash
ng new my-angular-app
cd my-angular-app
```

### Step 2: Build the Project

Build your project for production and set the base URL for GitHub Pages:

```bash
ng build --prod --base-href "https://<your-username>.github.io/<your-repo-name>/"
```

Replace `<your-username>` with your GitHub username and `<your-repo-name>` with your repository name.

### Step 3: Deploy to GitHub Pages

Install the Angular CLI GitHub Pages deployment tool:

```bash
npm install -g angular-cli-ghpages
```

Deploy the built project to GitHub Pages:

```bash
npx angular-cli-ghpages --dir=dist/my-angular-app
```

### Step 4: Verify the Deployment

Once the deployment is complete, you can visit your GitHub Pages URL to see your Angular application live:

```text
https://<your-username>.github.io/<your-repo-name>/
```

**Note:** Ensure that your repository is public for GitHub Pages to work.

By following these steps, you can easily deploy your Angular application on GitHub Pages and make it accessible to a wider audience. Happy coding!

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.