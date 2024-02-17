import Header from "./components/Header";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SingleBlog from "./components/SingleBlog";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/SingleBlog/:id" element={<SingleBlog />} />
        <Route exact path="blog/SingleBlog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
