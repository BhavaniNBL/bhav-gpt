import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("movies in secondary", movies);
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-40 pl-6 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      {/* {

        Movies List -  Popular
         Movies List - Now Playing
          Movies List -Trending 
          Movies List - Horror
      } */}
      
    </div>
    )
  );
};

export default SecondaryContainer;
