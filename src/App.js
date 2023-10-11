import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./bootstrap.css";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, Link } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Container className="mt-50 mb-50 justify-content-center">
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
