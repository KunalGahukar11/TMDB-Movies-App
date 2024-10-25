import Navbar from "./components/navbar/Navbar"
import { store } from "./redux/store";
import Routing from "./routes/Routing"
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <Navbar></Navbar>
        <Routing></Routing>
      </Provider>
    </>
  )
}

export default App
