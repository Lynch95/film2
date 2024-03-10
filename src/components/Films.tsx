import { Grid, GridItem, Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import FilmGrid from "./FilmGrid";

export interface Film {
  id: string
  title: string;
  description: string;
  image: string;
  category: string;
}

interface Props {
  films: Film[];
}

const Films = ({ films }: Props) => {
  const [filmClicked, setFilmClicked] = useState<Film | null>(null);
  const [filmId, setFilmId] = useState<string | null>(null)
 
  const handleFilmClick = (film: Film) => {
    setFilmClicked(film);
    setFilmId(film.id)
  };

  const filmLayout = (
    <Box>
<Image src={filmClicked?.image} />
{ filmId && <FilmGrid filmId={filmId} />}
{filmClicked?.title}
{filmClicked?.description}
    </Box>
  )

  const originalLayout = (
    <Grid
 gap={4}
      mx={4}
      mt={4}
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
    >
      {films.map((film) => (
        <GridItem key={film.id} w="100%" h="250px" border="1px" onClick={() => handleFilmClick(film)}>
          <Image src={film.image} />
          
        </GridItem>
      ))}
    </Grid>
  );

  return filmClicked ? filmLayout : originalLayout;
};

export default Films;
