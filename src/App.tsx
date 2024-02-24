import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Box } from "@chakra-ui/react"
import Reviews from "./pages/Reviews"

function App() {
  return (
<Box>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/reviews" element={<Reviews />} />
     </Routes>

  </Box>
  )
}

export default App