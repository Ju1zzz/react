import { Routes, Route } from "react-router-dom";
import {Menu} from './Menu';
import {Blog} from './Blog';
import {AddPost} from './AddPost';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element={<h1>Main page</h1>} />
        <Route path="/about" element={<h1>About us</h1>} />
        <Route path="/contacts" element={<h1>Contact us</h1>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/add-post" element={<AddPost/>} />
      </Routes>
    </div>
  );
}

export default App;
