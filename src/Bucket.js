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

const Bucket = ({name}) => {
  return (
    <Row>
      <Col md="2">
        <Label for="guilt-free-spending">{ name }</Label>
      </Col>
      <Col md="5">
        <InputGroup>
          <Input className="form-control" type="number" id="guilt-free-spending" placeholder="30" />
          <InputGroupAddon addonType="append">
            <InputGroupText>%</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Col>
      <Col md="2">
        <span>$0.00</span>
      </Col>
    </Row>
  )
}

export default Bucket;
