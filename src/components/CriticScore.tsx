import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge colorPalette={color} size='lg' fontSize='14px' borderRadius={5}>{score} </Badge>
  )
}

export default CriticScore