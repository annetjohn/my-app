import React from 'react';
import './App.css';
import CardUI from './Component/CardUI';
import { Button } from '@material-ui/core';
import  Header from './Component/header';


function App() {
  return (
    <div className="App">
      <Header />
      <CardUI />
      <CardUI />
      <div className="App-position">
      <Button  variant="contained" color="primary">
        SUBMIT
      </Button>
      </div>
    </div>
  );
}

export default App;
