import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import Add from './Components/Add';
import Edit from './Components/Edit';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/add" element={<Add />} />
    <Route exact path="/edit" element={<Edit />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
