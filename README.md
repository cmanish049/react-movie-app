# Project: react-basic

A modern web application built with React, Vite, and styled with Tailwind CSS. This project integrates with Appwrite for backend services.

## Features

- **React 19:** Leverages the latest features of React for a fast and interactive user interface.
- **Vite:** Next-generation frontend tooling for a significantly faster development experience.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Appwrite:** Utilizes Appwrite for backend services, such as authentication, databases, and storage.
- **ESLint:** Integrated for code quality and consistency.

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone git@github.com:cmanish049/react-movie-app.git
    cd react-basic
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Environment Setup

This project uses environment variables to handle sensitive keys and configuration.

1.  Create a `.env` file in the root of the project by copying the example file:
    ```bash
    cp .env.example .env
    ```

2.  Open the `.env` file and add your credentials for the TMDb API and Appwrite.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

- `npm run build`: Builds the app for production to the `dist` folder.

- `npm run lint`: Lints the source code using ESLint.

- `npm run preview`: Serves the production build locally to preview it.

## Project Structure

```
react-basic/
├── dist/                   # Production build output
├── node_modules/           # Project dependencies
├── public/                 # Static assets (e.g., images, fonts)
├── src/                    # Application source code
│   ├── components/         # Reusable React components
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Entry point of the application
├── .env.example            # Example environment variables
├── .eslintrc.cjs           # ESLint configuration
├── index.html              # Main HTML file
├── package.json            # Project metadata and dependencies
├── README.md               # This file
└── vite.config.js          # Vite configuration
```

## Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
