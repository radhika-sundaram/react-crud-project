import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';


import UserList from './pages/UserList';
import EditUser from './pages/EditUser';



export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="*" element={<NoPage/>}/>
      <Route path="login" element={<Login />} />
       <Route path="register" element={<Register />} />


<Route path="users" element={<UserList />} />
<Route path="edit/:id" element={<EditUser />} />

      </Route>
    </Routes>
    </BrowserRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)