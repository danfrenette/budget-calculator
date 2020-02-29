import React from 'react';
import Bucket from './Bucket';
import './App.css';
import { Container } from 'reactstrap';

class App extends React.Component {
  renderBuckets = () => {
    const buckets = {
      "Fixed Costs": 50,
      Investments: 10,
      Savings: 20,
      "Guilt-Free Spending": 30,
    };

    return Object.entries(buckets).map(([bucketName, percentage], i) => { 
      return (
        <Bucket key={i} name={bucketName} percentage={percentage}/>
      )
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          { this.renderBuckets() }
        </Container>
      </div>
    );
  }
}

export default App;
