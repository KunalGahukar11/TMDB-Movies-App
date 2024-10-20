import Navbar from "./components/navbar/Navbar"
import FavMovieCounterProvider from "./context/favMovieCounter/FavMovieCounterProvider"
import Routing from "./routes/Routing"

function App() {

  return (
    <>
      <FavMovieCounterProvider>
        <Navbar></Navbar>
        <Routing></Routing>
      </FavMovieCounterProvider>
    </>
  )
}

export default App
