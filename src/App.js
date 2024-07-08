import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import { Provider } from "react-redux";
import store from "./utils/Store.js"
function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
    <div className="app-container">
    <Header/>
    <Routes>
      <Route  path="/home" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<>Error 404 </>}/>
    </Routes>
    <Footer/>
    </div>

    </BrowserRouter>
    </Provider>

  );
}

export default App;
