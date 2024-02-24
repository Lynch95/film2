import { Box, HStack, Text } from '@chakra-ui/react'
import Films, {FilmItems} from '../components/Films'
import hillHouseImage from '/src/images/hillhouse.jpg'
import usherImage from '/src/images/usher.jpg'
import { useState } from 'react'
import Categories from '../components/Categories'

function Reviews() {

  const originalItems = [
    { id: 'tt6763664', title: 'poop', description: 'bbbbbbb', image: hillHouseImage, category: 'Horror' },
    { id: 'tt15567174', title: 'aaaaa', description: 'bbbbbbb', image: usherImage, category: 'Thriller' },
    { id: 'tt0000003', title: 'aaaaa', description: 'bbbbbbb', image: hillHouseImage, category: 'Action' },
    { id: 'tt0000004', title: 'aaaaa', description: 'bbbbbbb', image: hillHouseImage, category: 'Comedy' },
  ];

const [category, setCategory] = useState('')

const [modifiedItems, setModifiedItems] = useState<FilmItems[]>(originalItems)

const handleCategory = category ? modifiedItems.filter(f => f.category === category) : originalItems

  return (
    <>
    
    <Box w='100%'bg='black'>
    <HStack justify='center'>
      <Text color='white' fontWeight='semibold' fontSize='4xl'>Films</Text>
      </HStack>
    </Box>

    <Categories onSelectCategory={(category) => setCategory(category)} />
   
    <Films films={handleCategory} />
    </>
  )
}

export default Reviews
