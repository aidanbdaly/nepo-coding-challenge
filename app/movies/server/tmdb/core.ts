"use server";

import { URLSearchParams } from "url";

type TMDBConfig = {
    apiBaseUrl: string;
    apiKey: string;
};

const TMDBConfig: TMDBConfig = {
    apiBaseUrl: process.env.TMDB_API_BASE_URL ?? "",
    apiKey: process.env.TMDB_API_KEY ?? "",
} as const;

export const makeTMDBrequest = async <T>(resource: string, queryParams?: URLSearchParams): Promise<T> => {
    if (!TMDBConfig.apiBaseUrl || !TMDBConfig.apiKey) {
        throw new Error("TMDB API base URL or API key is not configured.");
    }

    const uri = `${TMDBConfig.apiBaseUrl}${resource}?${queryParams?.toString()}`;

    return fetch(uri, {
        method: "GET",
        headers: { "Authorization": `Bearer ${TMDBConfig.apiKey}` },
    }).then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    });
}
