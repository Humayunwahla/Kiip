
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
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
