import React from 'react';
import Bucket from './Bucket';
import './App.css';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Bucket name="Guilt-Free Spending"/>
      </Container>
    </div>
  );
}

export default App;
