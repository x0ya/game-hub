import { Card, Heading, Image } from "@chakra-ui/react";
import { type Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={game.background_image} borderRadius={10}/>
      <Card.Body>
        <Heading>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;