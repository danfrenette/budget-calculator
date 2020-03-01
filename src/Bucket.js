import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Col,
  Row,
  Label,
  Input
} from 'reactstrap';

class Bucket extends React.Component {
  state = {
    percentage: this.props.percentage
  };

  updatePercentage = e => {
    const percentageFromInput = e.target.value;
    const { name, percentUpdated } = this.props;

    percentUpdated(name, percentageFromInput);
    this.setState({percentage: percentageFromInput})
  };

  render() {
    const { name, income } = this.props;
    const { percentage } = this.state;

    return (
      <Row>
        <Col md="2">
          <Label>{ name }</Label>
        </Col>
        <Col md="5">
          <InputGroup>
            <Input
              className="form-control"
              type="number"
              min={0}
              max={100}
              defaultValue={ percentage }
              onChange={ this.updatePercentage }
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md="2">
          <span>{ income * (percentage / 100) }</span>
        </Col>
      </Row>
    )
  }
}

export default Bucket;
