import { Select} from "@chakra-ui/react"
import { filmCategories } from "../FilmCategories"

interface Props {
  onSelectCategory: (category: string) => void
}

const Categories = ({onSelectCategory}: Props) => {


  return (
    <Select placeholder="All Categories" onChange={(event) => onSelectCategory(event.target.value)}>
      {filmCategories.map(film => <option key={film} value={film}>{film}</option>)}
    </Select>
  )
}

export default Categories