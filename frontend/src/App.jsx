import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
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
        <Footer></Footer>
      </Provider>
    </>
  )
}

export default App
