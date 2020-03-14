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

class App extends React.Component {
  state = {
    income: 0,
    buckets: [ 
      { name: "Fixed Costs", percentage: 50 },
      { name: "Investments", percentage: 10 },
      { name: "Savings", percentage: 20 },
      { name: "Guilt-Free Spending", percentage: 20 },
    ]
  }

  updateIncome = e => {
    this.setState({ income: e.target.value });
  };

  percentUpdated = (bucketName, percentage) => {
    let buckets = this.state.buckets;
    buckets.find(bucket => bucket.name == bucketName).percentage = Number(percentage)
    this.setState(buckets)
  }

  renderBuckets = () => {
    const { buckets } = this.state

    return buckets.map((bucket, i) => (
      <Bucket
        key={i}
        name={bucket.name}
        percentage={bucket.percentage}
        percentUpdated={this.percentUpdated}
        income={this.state.income}
      />
    ))
  };

  renderTotal = () => {
    const percentages = this.state.buckets.map(bucket => bucket.percentage)
    const total = percentages.reduce(
      (sum, currentValue) => sum + currentValue
    );

    return (
      <Row className="mt-2">
        <Col md="2">
          <Label>Total</Label>
        </Col>
        <Col md={{size: 5, offset: 1}}>
          <InputGroup>
            <Input
              className="form-control"
              type="number"
              id="total"
              value={total}
              readOnly
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <div className="App">
        <h2>IWT Budget Calculator</h2>
        <Container>
          <Row>
            <Col md="2">
              <Label>Income</Label>
            </Col>
            <Col md={{size: 5, offset: 1}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <Input
                  className="form-control"
                  type="number"
                  defaultValue={0}
                  onChange={this.updateIncome}
                />
              </InputGroup>
            </Col>
            <Col md="2">
              <span>{this.state.income}</span>
            </Col>
          </Row>
          { this.renderBuckets() }
          { this.renderTotal() }
        </Container>
      </div>
    );
  }
}

export default App;
