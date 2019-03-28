/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Button,
} from 'reactstrap';
import ProjectMember from './ProjectMember';

const DongXi = `${process.env.PUBLIC_URL}/img/dongxi.jpg`;

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          Add to favorites
          <h6 className="bold-text">Requestor</h6>
          <ProjectMember img={DongXi} name="DongXi Doe" post="dongxi.doe@gmail.com" />
          <h6 className="bold-text">Manager</h6>
          <ProjectMember img={DongXi} name="DongXi Doe" post="dongxi.doe@gmail.com" />
          <h6 className="bold-text">Description</h6>
          ZenMana and MSAT have announced today the planned merger of their business operations to offer a unified
          mobile and communications solution to the enterprise market. ZenMana will acquire the MSAT assets, people
          and customer contracts and the merged business will operate under the ZenMana brand.
          <p />
          <Button outline>Engagement history</Button>
          <ProjectMember img={DongXi} name="DongXi Doe" post="dongxi.doe@gmail.com" />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
