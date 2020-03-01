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

const Bucket = ({name, percentage, income}) => {
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

export default Bucket;
