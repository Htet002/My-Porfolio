import logo from './logo.svg';
import './App.css';
import React from 'react';


import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Porfolio from './components/Porfolio/Porfolio';
import Resume from './components/Resume/Resume';
import Sidebar from './components/Sidebar/Siderbar';
import About from './components/About/About';
function App() {
  return (<>
    <Sidebar/>
    <main className='main'>
    <Home/>
    <About/>
    <Resume/>
    <Porfolio/>
    <Contact/>
    
    
    </main>
   


   
    
      
  </>
   
  );
}

export default App;
