import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './Components/index';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/contact' component={Contact}/>
    </>

  );
}

export default App;
