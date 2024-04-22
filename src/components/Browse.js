import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingMovies";
import MainConatiner from "./MainConatiner";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingHooks();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainConatiner />
          <SecondaryContainer />
        </>
      )}

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
