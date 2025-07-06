export type MovieListing = {
    id: number;
    title: string;
    posterUrl: string;
};

export interface MovieDetails {
    id: number;
    title: string;
    originalTitle: string;
    tagline: string | null;
    overview: string | null;
    releaseDate: string;
    runtime: number | null;
    status:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled';
    rating: {
        average: number;
        count: number;
    };
    genres: string[];
    countries: string[];
    spokenLanguages: string[];
    posterUrl: string | null;
    backdropUrl: string | null;
    homepage: string | null;
    imdbId: string | null;
}
