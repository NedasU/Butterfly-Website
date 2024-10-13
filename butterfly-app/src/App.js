import './styles/styles.css';
import HomePage from "./pages/HomePage";
import RequestPage from './pages/RequestPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/Request' element={<RequestPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
