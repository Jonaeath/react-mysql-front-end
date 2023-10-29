import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./Page/Create/Create";



const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>

    </Router>
  );
};

export default App;