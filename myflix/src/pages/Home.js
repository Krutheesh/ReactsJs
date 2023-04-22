import React from "react";
import Main from "../Main";
import Row from "./Row";

function Home() {
 
  return (
    <>
    <Main/>
    <Row title="Trending" fetchUrl="https://api.themoviedb.org/3/trending/all/day?api_key=f75cf85672f034d884f6e73c0c4b4fe8"/>
    <Row title = "Popular" fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=f75cf85672f034d884f6e73c0c4b4fe8&language=en-US&page=1"/>
    <Row title = "Top Rated" fetchUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f75cf85672f034d884f6e73c0c4b4fe8&language=en-US&page=1'/>
    </>
  );
}

export default Home;
