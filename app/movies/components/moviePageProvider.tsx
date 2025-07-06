import { useContext } from "react";
import { MoviePageContext } from "../context/moviePageContext";

type MoviePageProviderProps = {
  query: string;
  page: string;
};

export const MoviePageProvider = (
  props: React.PropsWithChildren<MoviePageProviderProps>
) => {
  const { query, page, children } = props;

  const getSearchParams = () => {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);
    searchParams.set("page", page);
    return searchParams;
  };

  return (
    <MoviePageContext.Provider value={{ query, page, getSearchParams }}>
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
