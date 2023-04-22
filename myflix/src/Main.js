import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Main() {
  const [movies, setMovies] = useState("");
  const apiHandler = async () => {
    try {
      // https://api.themoviedb.org/3/movie/76341?api_key=f75cf85672f034d884f6e73c0c4b4fe8
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f75cf85672f034d884f6e73c0c4b4fe8`
      );
      console.log(data.data.results);
      setMovies(data.data.results[Math.floor(Math.random() * 20)]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiHandler();
  }, []);
  console.log(movies);

  return (
    <div>
      <div className=" w-full  text-white ">
        <div className="w-full  h-full absolute bg-gradient-to-r from-black"></div>

        <img
          className="w-full h-[100vh] object-cover "
          src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
          alt="mnmnnn"
        />
        <div className="absolute text-white z-40  top-[30%] p-4 space-y-5">
          <h2>
            <span className="text-[1.5rem] font-bold"> {movies.title}</span>
          </h2>
          <div className="space-x-3">
            <button className="bg-white text-black px-5 py-2 border-white hover:text-red-600">
              play
            </button>
            <button className="border px-5 py-2 hover:bg-red-600 hover:text-white hover:border-red-600">
              watch later
            </button>
          </div>
          <p className="text-gray-400 text-[13px]">
            {" "}
            Released: {movies.release_date}
          </p>
          <p className="w-[70%]"> {movies.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
