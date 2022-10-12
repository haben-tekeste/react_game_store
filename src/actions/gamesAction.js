import axios from "axios";
import { popularGamesUrl , upcomingGamesUrl, newGamesUrl, searchGameURL} from "../api";

export const loadGames = () => async (dispatch) => {
    const popularGamesData = await axios.get(popularGamesUrl());
    const upcomingGamesData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
   
  dispatch({
    type: "FETCH_GAMES",
    payload:{
        popular: popularGamesData.data.results,
        newGames: upcomingGamesData.data.results,
        upcoming: newGamesData.data.results
    }
  }) ;
};

export const fetchSearch = (text) => async(dispatch) => {
  const searchData = await axios.get(searchGameURL(text));
  dispatch({
    type:"FETCH_SEARCH",
    payload:{
      value:searchData.data.results
    }
  })
}

export const clearSearch = () => {
  return ({
    type:"CLEAR_SEARCHES"
  })
}