//base url
const base_url = "https://api.rawg.io/api/";
const KEY = process.env.REACT_APP_API_KEY;

//getting dates
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  else return day;
};

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentFullDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?dates=${lastYear},${currentFullDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${lastYear},${currentFullDate}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentFullDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}&key=${KEY}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}&key=${KEY}`;
export const newGamesUrl = () => `${base_url}${new_games}&key=${KEY}`;
export const gameDetailUrl = (gameId) => `${base_url}games/${gameId}?key=${KEY}`; 
export const gameScreenshotsUrl = (gameId) => `${base_url}games/${gameId}/screenshots?key=${KEY}`; 
export const searchGameURL = (game_name) =>`${base_url}games?search=${game_name}&page_size=9&key=${KEY}`;