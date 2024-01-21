import { useDispatch, useSelector } from "react-redux";
import { addTopMovies } from "../utils/moviesSlice";
import { API_OPTION, TOP_RATED_API, TRENDING_API } from "../utils/constant";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const data = useSelector((store) => store.movies.topRatedMovies);

  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_API, API_OPTION);
    const json = await data.json();
    dispatch(addTopMovies(json.results));
  };

  useEffect(() => {
    !data && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
