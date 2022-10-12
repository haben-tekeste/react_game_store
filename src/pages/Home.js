import React, { useEffect } from "react";
import Game from "../components/Game";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//
import {
  motion,
  LayoutGroup,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";
import styled from "styled-components";
import { fadeIn } from "../Animations";
//
import GameDetails from "../components/GameDetails";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  const loc = useLocation();
  const path = loc.pathname.split("/")[2];
  return (
    <GameList variants={fadeIn} animate='show' initial="hidden">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{path && <GameDetails />}</AnimatePresence>
        {searched.length ? (
        <div className="search-games">
          <h2>Searched Games</h2>
          <Games>
            {searched.map((game) => (
              <Game game={game} key={game.id} />
            ))}
          </Games>
        </div>
        ):""}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 2rem;
  row-gap: 5rem;
  margin-bottom: 5rem;
`;

export default Home;
