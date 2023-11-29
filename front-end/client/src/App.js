import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PostList } from './Pages/postLists/postLists';
import './index.css'
import { Login } from './Pages/credentials/login';
import { Register } from './Pages/credentials/register';
import { MyProfile } from './Pages/myProfile/myProfile';
import { ArticleDetail } from './Pages/articleDetail/articleDetail';
import { NewArticle } from './Pages/newArticle/newArticle';



function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
       
          <Route path='/' element={<PostList></PostList>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/articleDetail/:id' element={<ArticleDetail></ArticleDetail>}></Route>
          <Route path='/Article/new' element={<NewArticle></NewArticle>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
