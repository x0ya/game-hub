import { Card, Heading, Image } from "@chakra-ui/react";
import { type Game } from "@/hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={game.background_image} borderRadius={10}/>
      <Card.Body>
        <Heading>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
