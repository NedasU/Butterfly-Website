import './styles/styles.css';
import HomePage from "./pages/HomePage";
import RequestPage from './pages/RequestPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BraceletPage from './pages/BraceletPage';
import { ProductProvider } from './ContextHooks/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/Request' element={<RequestPage/>} />
            <Route path='/bracelets' element={<BraceletPage/>} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
