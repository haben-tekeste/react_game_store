import axios from "axios";
import { gameDetailUrl, gameScreenshotsUrl } from "../api";

const loadGameDetail = (id) => async (dispatch) => {
    dispatch({
        type:"LOAD_GAME"
    })
    const gameDetail = await axios.get(gameDetailUrl(id));
    const gameScreenshots = await axios.get(gameScreenshotsUrl(id));
    dispatch({
        type:"GET_DETAIL",
        payload:{
            detail:gameDetail.data,
            screenshots: gameScreenshots.data
        }
    })
}

export default loadGameDetail;