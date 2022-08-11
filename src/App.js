import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Nav';

const App = () => (
  <div className="App">
    <Nav />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
