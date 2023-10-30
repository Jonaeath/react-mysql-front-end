import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./Page/Create/Create";
import Read from "./Page/Read/Read";
import Edit from "./Page/Edit/Edit";

// Tutorial : https://www.youtube.com/watch?v=y5NvOade3sk

const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/read/:id" element={<Read/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>

    </Router>
  );
};

export default App;