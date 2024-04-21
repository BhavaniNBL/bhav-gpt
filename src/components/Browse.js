import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingMovies";
import MainConatiner from "./MainConatiner";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingHooks();
  usePopularMovies();
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
