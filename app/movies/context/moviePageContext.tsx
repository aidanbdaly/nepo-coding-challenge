"use client";

import { createContext } from "react";

type MoviePageContextType = {
  query: string;
  page: string;
  getSearchParams: () => URLSearchParams;
};

export const MoviePageContext = createContext<MoviePageContextType | null>(null);