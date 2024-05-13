import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

 // Client side
const handleSearch = async (searchQuery) => {

      if(searchQuery){
        const { data } = await axios.get(`https://server-omega-dusky.vercel.app/services/search-datas/search-data/data?search=${searchQuery}`);
        setSearchResults(data);
      }
 
};

  
  

  return (
    <SearchContext.Provider value={{ searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
