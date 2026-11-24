import useGenres from "@/hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const FetchGenre = () => {
  const { data } = useGenres();
  return (
    <List.Root listStyle='none'>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Text>{genre.name}</Text>
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
