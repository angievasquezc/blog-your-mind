import { BrowserRouter, Routes, Route}
import { PostList } from './Components/postLists/postLists';
import './index.css'


function App() {
  return (
    <div >
      <p className='text-6xl text-red-500'>hola react</p>
   <PostList/>
    </div>
  );
}

export default App;
