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
    buckets: {
      "Fixed Costs": 50,
      Investments: 10,
      Savings: 20,
      "Guilt-Free Spending": 30,
    }
  }

  updateIncome = e => {
    this.setState({ income: e.target.value });
  };

  percentUpdated = (bucketName, percentage) => {
    let buckets = this.state.buckets;
    buckets[bucketName] = percentage
    this.setState(buckets)
  }

  renderBuckets = () => {
    const { buckets } = this.state

    return Object.keys(buckets).map((bucketName, i) => {
      return (
        <Bucket
          key={i}
          name={bucketName}
          percentage={buckets[bucketName]}
          percentUpdated={this.percentUpdated}
          income={this.state.income}
        />
      )
    });
  };

  renderTotal = () => {
    const total = Object.values(this.state.buckets).reduce(
      (sum, currentValue) => Number(sum) + Number(currentValue)
    );

    return (
      <Row>
        <Col md="2">
          <Label>Total</Label>
        </Col>
        <Col md="5">
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
        <Container>
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
