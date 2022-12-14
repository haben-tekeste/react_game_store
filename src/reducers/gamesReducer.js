const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCH":
      return {
        ...state,
        searched: action.payload.value,
      };
    case "CLEAR_SEARCHES":
      return {
        ...state,
        searched:[]
      };
    default:
      return state;
  }
};

export default gamesReducer;
