import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PostList } from './Pages/postLists/postLists';
import './index.css'
import { Login } from './Pages/credentials/login';
import { Register } from './Pages/credentials/register';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostList></PostList>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
