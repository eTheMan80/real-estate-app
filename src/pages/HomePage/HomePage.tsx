import React, { useReducer, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import PropertyList from "../../components/PropertyList"
import SearchBar from "../../components/SearchBar"
import { initialState, reducer } from "../../services/store/reducer"
import "../../App.css"

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [{ properties }, dispatch] = useReducer(reducer, initialState)

  const handleSearch = async (query: string) => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    if (query.trim() === "") {
      dispatch({
        type: "LoadProperties",
      })
    } else {
      dispatch({
        type: "SearchProduct",
        payload: query,
      })
    }
    setLoading(false)
  }

  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          List of properties
        </Typography>
      </Box>
      <SearchBar onSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {!loading && <PropertyList properties={properties} />}
    </div>
  )
}

export default App
