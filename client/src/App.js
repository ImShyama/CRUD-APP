import Navbaar from './components/NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Navbaar />}>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/register' element={<Register />} />
  //       <Route path='/edit/:id' element={<Edit />} />
  //       <Route path='/view/:id' element={<Details />} />
  //     </Route>
  //   )
  // )
    

  return (
    <>
    <Navbaar />
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/view/:id' element={<Details />} />
    </Routes>
   </>
    // <div className='App'>
    //   <RouterProvider router={router} />
    // </div>
  );
}

export default App;
