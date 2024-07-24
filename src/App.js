
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Allroute from './components/screen/Allroute';
import Selfquote from './components/innerpages/Selfquote';
import Addedquote from './components/innerpages/Addedquote';
import Recommend from './components/innerpages/Recommend';
import Form from './components/auth/Form';
import Show from './components/innerpages/Show';
import Quote from './components/innerpages/Quote';
import Savemore from './components/innerpages/Savemore';
import Ultimate from './components/innerpages/Ultimate';
import Flexible from './components/innerpages/Flexible';
import Estimated from './components/nanopages/Estimated';
import Valueestimated from './components/nanopages/Valueestimated';
import Priceestimated from './components/nanopages/Priceestimated';
import Finalestimated from './components/nanopages/Finalestimated';
import Login from './components/auth/Login';
import Dashboard from './components/backend/Dashboard';
import Dashboardmenu from './components/backend/menu/Dashboardmenu';
import Userlisting from './components/backend/menu/Userlisting';
import Warehouse from './components/backend/menu/Warehouse';
import Textareestimated from './components/nanopages/Textareestimated';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Allroute/>}/>
      <Route  path='/home' element={<Home/>}/>
      <Route  path='/selfquote' element={<Selfquote/>}/>
      <Route  path='/addedqoute' element={<Addedquote/>}/>
      <Route  path='/recomend' element={<Recommend/>}/>
      <Route  path='/form' element={<Form/>}/>
      <Route  path='/show' element={<Show/>}/>
      <Route  path='/quote' element={<Quote/>}/>
      <Route  path='/savemore' element={<Savemore/>}/>
      <Route  path='/ultimate' element={<Ultimate/>}/>
      <Route  path='/flexible' element={<Flexible/>}/>
      <Route  path='/estimated' element={<Estimated/>}/>
      <Route  path='/estimatedvalue' element={<Valueestimated/>}/>
      <Route  path='/estimatedprice' element={<Priceestimated/>}/>
      <Route  path='/finalestimated' element={<Finalestimated/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/dashboard' element={<Dashboard/>}/>
      <Route  path='/dashboardmenu' element={<Dashboardmenu/>}/>
      <Route  path='/userlisting' element={<Userlisting/>}/>
      <Route  path='warehouse' element={<Warehouse/>}/>
      <Route  path='estimatetextarea' element={<Textareestimated/>}/>






    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
