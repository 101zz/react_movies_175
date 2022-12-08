import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";
import { useState } from "react";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { urlMovies } from "../endpoints";
import AlertContext from "../utils/AlertContext";
import Authorized from "../auth/Authorized";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
      setMovies(response.data);
    });
  }

  return (
    <AlertContext.Provider
      value={() => {
        loadData();
      }}>
      
      {/* <Authorized 
        authorized={<>You are authorized</>}
        notAuthorized={<>You are NOT authorized</>}
        role="admin"
      /> */}

      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </AlertContext.Provider>
  );
}
