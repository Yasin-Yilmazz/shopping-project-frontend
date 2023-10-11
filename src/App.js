import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./bootstrap.css";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
