export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const USER_AVATAR =
  "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXSR25u2XRPTi6AgkfJ4w3FcrNCA316cdzfpppcKJObwDgcSvlN3UJOZ1x-rktlH2aRLsZCgsUwhCso2YeWQDPwDoRFGYsE.png?r=85b";

export const BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const TRENDING_API = "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_AUTHCODE,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_REACT_APP_OPENAI;
