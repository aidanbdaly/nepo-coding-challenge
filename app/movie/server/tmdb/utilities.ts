const imageBaseUrl = process.env.TMDB_API_IMAGE_BASE_URL ?? "" as const;

export const getTMDBImageUrl = (path: string): string => {
    if (!imageBaseUrl) {
        throw new Error("TMDB API image base URL is not configured.");
    }

    return `${imageBaseUrl}${path}`;
}