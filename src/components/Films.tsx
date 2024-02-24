import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Grid, GridItem, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import FilmGrid from "./FilmGrid";

export interface FilmItems {
  id: string
  title: string;
  description: string;
  image: string;
  category: string;
  }

interface Props {
  films: FilmItems[];
  
}

const Films = ({ films}: Props) => {

const [filmLayout, setFilmLayout] = useState<FilmItems | null>(null)
const [selectedFilmId, setSelectedFilmId] = useState<string | null>(null)

const handleFilm = (film: FilmItems) => {
  setFilmLayout(film)
  setSelectedFilmId(film.id)
  
}

const handleBack = () => {
  setFilmLayout(null)
  setSelectedFilmId(null)
  
}

const layout = (
  <>
    <IconButton onClick={handleBack} aria-label="Go Back" icon={<ArrowBackIcon />} />
    <Container>
      {selectedFilmId && <FilmGrid filmId={selectedFilmId} />}
      <Image src={filmLayout?.image} />
      <Text>{filmLayout?.title}</Text>
    </Container>
  </>
);


    const originalLayout = (
    <Grid gap={4} mt={4} mx={4} templateColumns={ {base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'} }>
      {films.map((film) => (
        <GridItem key={film.id}
        w='100%'
        h='250px'
        border='1px'
        cursor='pointer'
        onClick={() => handleFilm(film)}
        >
         <Image src={film.image} />
         
          </GridItem>
      ))}
    </Grid>
    )

    return filmLayout ? layout : originalLayout
};

export default Films;
