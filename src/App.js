import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Reviews from "./components/Reviews";
import ReviewItem from "./components/ReviewItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/reviews/:review_id" element={<ReviewItem />}></Route>
        <Route path="*" element={<p>404: The page you requested was not found...</p>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
