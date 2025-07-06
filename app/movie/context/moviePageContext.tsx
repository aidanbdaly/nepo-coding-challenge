"use client";

import { createContext, useContext } from "react";

type MoviePageContextType = {
  query: string;
  page: string;
};

const MoviePageContext = createContext<MoviePageContextType | null>(null);

type MoviePageProviderProps = {
  query: string;
  page: string;
};

export const MoviePageProvider = (
  props: React.PropsWithChildren<MoviePageProviderProps>
) => {
  const { query, page, children } = props;

  return (
    <MoviePageContext.Provider value={{ query, page }}>
      {children}
    </MoviePageContext.Provider>
  );
};

export const useMoviePageContext = () => {
  const context = useContext(MoviePageContext);

  if (!context) {
    throw new Error(
      "useMoviePageContext must be used within a MoviePageProvider"
    );
  }

  return context;
};
