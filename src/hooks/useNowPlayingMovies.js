import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTION, NOW_PLAYING_API } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const data = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTION);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !data && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
