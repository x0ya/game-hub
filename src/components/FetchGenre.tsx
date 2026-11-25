import useGenres, { type Genre } from "@/hooks/useGenres";
import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

interface Props{
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const FetchGenre = ({selectedGenre, onSelectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root listStyle='none'>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Button variant={selectedGenre?.id === genre.id ? "subtle" : "ghost"} onClick={() => onSelectedGenre(genre)} padding="">
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize={selectedGenre?.id === genre.id ? "lg" : ""}>{genre.name}</Text>
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default FetchGenre;

//useGenres
// import apiClient from "@/services/api-client";
// import { CanceledError } from "axios";
// import { useEffect, useState } from "react";

// interface Genre {
//     id: number;
//     name: string;
// }

// interface FetchGenresResponse {
//     count: number;
//     results: Genre [];
// }

// const useGenres = () => {
//       const [genres, setGenres] = useState<Genre[]>([]);
//       const [error, setError] = useState("");
//       const [isLoading, setLoading] = useState(false);

//       useEffect(() => {
//         const controller = new AbortController();
//         setLoading(true);
//         apiClient
//           .get<FetchGenresResponse>("/genres", { signal: controller.signal})
//           .then((res) => {
//             setGenres(res.data.results)
//             setLoading(false);
//           })
//           .catch((error) => {
//             if(error instanceof CanceledError) return
//             setError(error.message)
//             setLoading(false)
//           });
//         return () => controller.abort();
//       }, []);

//       return { genres, error, isLoading};
// }

// export default useGenres
