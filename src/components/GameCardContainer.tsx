import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default GameCardContainer;

//GameGrid
// {isLoading &&
//           skeletons.map((skeleton) => (
//             <GameCardContainer>
//               <GameCardSkeleton key={skeleton} />
//             </GameCardContainer>
//           ))}
//         {games.map((game) => (
//           <GameCardContainer>
//             <GameCard key={game.id} game={game} />
//           </GameCardContainer>
