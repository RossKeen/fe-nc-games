import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<p>404: The page you requested was not found...</p>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
