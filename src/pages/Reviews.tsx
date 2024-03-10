import { Box, HStack, Text } from '@chakra-ui/react'
import Films, {Film} from '../components/Films'
import hillHouseImage from '/src/images/hillhouse.jpg'
import usherImage from '/src/images/usher.jpg'
import { useState } from 'react'
import Categories from '../components/Categories'

function Reviews() {

  const originalItems = [
    { id: 'tt0120815', title: 'poop', description: 'bbbbbbb', image: hillHouseImage, category: 'Horror' },
    { id: 'aaaa', title: 'aaaaa', description: 'bbbbbbb', image: usherImage, category: 'Thriller' },
    { id: 'bbbbb', title: 'aaaaa', description: 'bbbbbbb', image: hillHouseImage, category: 'Action' },
    { id: 'hhhh', title: 'aaaaa', description: 'bbbbbbb', image: hillHouseImage, category: 'Comedy' },
  ];

const [modifiedFilms, setModifiedFilms] = useState<Film[]>(originalItems)

const [category, setCategory] = useState('')

const visibleFilms = category ? modifiedFilms.filter(f => f.category === category) : originalItems

return (
  <Box>
      <Categories onSelectCategory={(category) => setCategory(category)}/>

  <Films films={visibleFilms} />


  </Box>
)
  
}

export default Reviews
