import { Client, Databases, ID, Query, Models } from 'appwrite';

// Define interfaces for our data structures
interface Movie {
    id: number;
    poster_path: string | null;
}

export interface TrendingMovieDocument extends Models.Document {
    searchTerm: string;
    count: number;
    movie_id: number;
    poster_url: string;
}

const PROJECT_ID: string = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID: string = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID: string = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ENDPOINT: string = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm: string, movie: Movie): Promise<void> => {
    try {
        const result = await database.listDocuments<TrendingMovieDocument>(
            DATABASE_ID, 
            COLLECTION_ID, 
            [Query.equal('searchTerm', searchTerm)]
        );

        if (result.documents.length > 0) {
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1
            });
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            });
        }
    } catch (error) {
        console.error('Error updating search count:', error);
    }
}

export const getTrendingMovies = async (): Promise<TrendingMovieDocument[]> => {
    try {
        const result = await database.listDocuments<TrendingMovieDocument>(
            DATABASE_ID, 
            COLLECTION_ID, 
            [
                Query.orderDesc('count'),
                Query.limit(5)
            ]
        );
        return result.documents;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return [];
    }
}
