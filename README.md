# SheplabsLandingpage

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.1.

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

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Security & Professional Configuration

This project follows Big Tech standards for security and maintainability:

### 1. Environment Variables (Zero-Leak Strategy)

Sensitive IDs (Formspree, WhatsApp) are managed via Angular Environments.

- Local dev values: `src/environments/environment.ts`
- Production values: Generated during build from Environment Variables.

**Vercel Setup:**
Add the following Environment Variables in your Vercel Project Settings:

- `FORMSPREE_ID`: Your Formspree form ID.
- `WHATSAPP_NUMBER`: Your business WhatsApp number (e.g., `5218182007534`).

### 2. Security Headers

A `vercel.json` file is included with professional-grade security headers:

- **CSP (Content Security Policy)**: Prevents XSS.
- **HSTS**: Forces HTTPS.
- **X-Frame-Options**: Prevents clickjacking.

### 3. Build Process

The build command `npm run build` automatically runs a pre-build script (`scripts/set-env.js`) to inject your Vercel environment variables into the Angular production bundle.
