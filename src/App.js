import { Route, Routes } from "react-router-dom";
import Get from "./Get";
import "./App.css";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/nopage" element={<NoPage />}></Route>
      </Routes> */}
      {/* <Get/> */}

      <Post/>
    </div>
  );
}

export default App;
