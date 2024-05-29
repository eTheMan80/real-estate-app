import React, { useReducer } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import PropertyList from "../PropertyList"
import SearchBar from "../SearchBar"
import { initialState, reducer } from "../../store/reducer"
import "../../App.css"

const App: React.FC = () => {
  const [{ properties }, dispatch] = useReducer(reducer, initialState)

  const handleSearch = (query: string) => {
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
  }

  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          List of properties
        </Typography>
      </Box>
      <SearchBar onSearch={handleSearch} />
      <PropertyList properties={properties} />
    </div>
  )
}

export default App
