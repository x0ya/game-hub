import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="325px">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;

//GameGrid
        // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
        // {isLoading &&
        //   skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

//useGames
// const [isLoading, setLoading] = useState(false);
//put setLoadign(true) after then stat and err stat and return isLoading
