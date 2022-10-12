import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import gameDetailAction from "../actions/gameDetailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../Animations";

const Game = ({ game }) => {
  const dispatch = useDispatch();

  const getGameDetail = () => {
    document.body.style.overflow="hidden";
    dispatch(gameDetailAction(game.id, game.id));
  };

  return (
    <StyledGame onClick={getGameDetail} variants={popup} animate="show" initial="hidden">
      <Link to={`/games/${game.id}`}>
        <motion.h2 >{game.name}</motion.h2>
        <p>{game.released}</p>
        <motion.img src={smallImage(game.background_image,640)} alt="" />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  h2,
  p {
    text-align: center;
  }
  h2{
    font-size: 1.3rem;
  }
  margin-top: 1rem;
  min-height: 40vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

export default Game;
