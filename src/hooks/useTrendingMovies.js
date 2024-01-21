import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTION, TRENDING_API } from "../utils/constant";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const data = useSelector((store) => store.movies.trendingMovies);
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(TRENDING_API, API_OPTION);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !data && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
