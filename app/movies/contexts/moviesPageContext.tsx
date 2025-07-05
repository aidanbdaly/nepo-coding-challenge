{/* movie page context file */}

import React, { createContext, useContext, useState } from 'react';

interface MoviesPageContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const MoviesPageContext = createContext<MoviesPageContextProps | undefined>(undefined);

export const MoviesPageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <MoviesPageContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </MoviesPageContext.Provider>
  );
};

export const useMoviesPageContext = (): MoviesPageContextProps => {
  const context = useContext(MoviesPageContext);
  if (!context) {
    throw new Error('useMoviesPageContext must be used within a MoviesPageProvider');
  }
  return context;
};
