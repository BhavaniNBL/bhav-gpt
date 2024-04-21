import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingMovies";
import MainConatiner from "./MainConatiner";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingHooks();
  return (
    <div>
      <Header />
      <MainConatiner />
      <SecondaryContainer />
      {/* 
         Main Container
          -video background
          -video title

        Secondary Container
          - Movieslist * N
          - cards*N
          
      */}
    </div>
  );
};

export default Browse;
