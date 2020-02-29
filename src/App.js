import React from 'react';
import Bucket from './Bucket';
import './App.css';
import { Container } from 'reactstrap';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Col,
  Row,
  Label,
  Input
} from 'reactstrap';

const Income = () => {
  return (
    <Row>
      <Col md="2">
        <Label>Income</Label>
      </Col>
      <Col md="5">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <Input
            className="form-control"
            type="number"
            defaultValue={0}
          />
        </InputGroup>
      </Col>
      <Col md="2">
        <span>$0.00</span>
      </Col>
    </Row>
  )
}

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
          <Income/>
          { this.renderBuckets() }
        </Container>
      </div>
    );
  }
}

export default App;
