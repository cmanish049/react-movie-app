# Project Documentation: React Movie Search

This document provides a detailed overview of the React Movie Search application, including its architecture, components, and backend integration.

## 1. Project Overview

The application is a movie search tool built with React and Vite. It allows users to search for movies using the The Movie Database (TMDb) API and view trending movies based on search popularity, which is tracked using Appwrite.

### Key Technologies

- **React:** For building the user interface.
- **Vite:** As the build tool and development server.
- **Tailwind CSS:** For styling the application.
- **Appwrite:** For backend services, specifically for tracking search counts and identifying trending movies.
- **TMDb API:** As the source of movie data.

## 2. Application Structure

The main application logic resides in `src/App.jsx`. This component manages the application's state, including the search term, movie list, and loading status.

### State Management

- `searchTerm`: Stores the user's input from the search bar.
- `debouncedSearchTerm`: A debounced version of `searchTerm` to avoid excessive API calls while the user is typing.
- `movieList`: An array of movie objects fetched from the TMDb API.
- `trendingMovies`: An array of trending movie objects fetched from Appwrite.
- `isLoading`, `errorMessage`, `trendingMoviesLoading`, `trendingMoviesError`: State variables for handling loading and error states.

### Data Fetching

- `fetchMovies(query)`: Fetches movies from the TMDb API based on the search query. If the query is empty, it fetches a list of popular movies.
- `loadTrendingMovies()`: Fetches the list of trending movies from the Appwrite backend.

## 3. Appwrite Integration

The application uses Appwrite to track the popularity of search terms. The relevant code is in `src/appwrite.js`.

### Environment Variables

The following environment variables are required in a `.env` file at the project root:

- `VITE_APPWRITE_PROJECT_ID`: Your Appwrite project ID.
- `VITE_APPWRITE_DATABASE_ID`: The ID of the Appwrite database.
- `VITE_APPWRITE_COLLECTION_ID`: The ID of the collection used for storing search terms.
- `VITE_APPWRITE_ENDPOINT`: Your Appwrite project endpoint.
- `VITE_TMDB_API_KEY`: Your TMDb API key.

### Functions

- `updateSearchCount(searchTerm, movie)`: When a user searches for a term, this function checks if the term exists in the Appwrite collection. If it does, it increments the `count`. If not, it creates a new document for the search term.
- `getTrendingMovies()`: Retrieves the top 5 most searched terms from the Appwrite collection, ordered by the `count` in descending order.

## 4. Components

The application is built from a set of reusable components located in `src/components/`.

### `Search.jsx`

- **Purpose:** Renders the search input field.
- **Props:**
  - `searchTerm` (string): The current value of the search input.
  - `setSearchTerm` (function): A callback function to update the `searchTerm` state in the parent component.

### `MovieCard.jsx`

- **Purpose:** Displays a single movie with its poster, title, rating, language, and release year.
- **Props:**
  - `movie` (object): An object containing the movie's details (`title`, `vote_average`, `poster_path`, etc.).

### `Spinner.jsx`

- **Purpose:** A simple loading spinner to indicate that data is being fetched.
- **Props:** None.

## 5. API Usage

The application interacts with two main APIs:

- **TMDb API:** Used to fetch movie data. The base URL is `https://api.themoviedb.org/3`. The API key is passed in the `Authorization` header as a Bearer token.
- **Appwrite API:** Used for the backend. All interactions are handled through the Appwrite Web SDK.
