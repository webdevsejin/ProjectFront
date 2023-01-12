import './App.css';
import Main from './Component/Main';
import Header from './Component/Header';
import CardSection from './Component/CardSection';
import Section2 from './Component/Section2';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import SectionCard from './Component/SectionCard';
import SectionCard1 from './Component/SectionCard1';
import SectionCard2 from './Component/SectionCard2';
import Progress from './Component/Progress';
import MainAlert from './Component/MainAlert';
import RightCard from './Component/RightCard';
import HeaderAvartar from'./Component/HeaderAvartar';


export default function App() {
  const  [id, setId] = useState('');
  return (
    <div className="App">
      <Routes>     
        <Route exact path='/' element={<Main />} />
        <Route exact path='/Header' element={<Header/>}/>
        <Route exact path='/CardSection' element={<CardSection/>}/>
        <Route exact path='/Section2' element={<Section2/>}/>
        <Route exact path='/SectionCard' element={<SectionCard/>}/>
        <Route exact path='/SectionCard1' element={<SectionCard1/>}/>
        <Route exact path='/SectionCard2' element={<SectionCard2/>}/>
        <Route exact path='/Progress' element={<Progress/>}/>
        <Route exact path='/MainAlert' element={<MainAlert/>}/>
        <Route exact path='/RightCard' element={<RightCard/>}/>
        <Route exact path='/HeaderAvartar' element={<HeaderAvartar/>}/>
      </Routes>
    </div>
  );
}