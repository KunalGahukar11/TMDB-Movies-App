import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar"
import { store } from "./redux/store";
import Routing from "./routes/Routing"
import { Provider } from 'react-redux';
import { SnackbarProvider } from "notistack";

function App() {

  return (
    <>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <Navbar></Navbar>
          <Routing></Routing>
          <Footer></Footer>
        </SnackbarProvider>
      </Provider>
    </>
  )
}

export default App
