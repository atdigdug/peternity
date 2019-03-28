/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Button,
} from 'reactstrap';
import FavoriteIcon from 'mdi-react/FavoriteIcon';
import HistoryIcon from 'mdi-react/HistoryIcon';
import ProjectMember from './ProjectMember';

const RequestorImage = `${process.env.PUBLIC_URL}/img/dongxi.jpg`;
const ManagerImage = `${process.env.PUBLIC_URL}/img/chandra.jpg`;
const LastModifiedImage = `${process.env.PUBLIC_URL}/img/effendi.jpg`;

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <FavoriteIcon />Add to favorites
          <hr />
          <p />
          <h6 className="bold-text">Requestor</h6>
          <ProjectMember img={RequestorImage} name="DongXi Doe" post="dongxi.doe@gmail.com" />
          <p />
          <h6 className="bold-text">Manager</h6>
          <ProjectMember img={ManagerImage} name="Chandra Jackson" post="chandra.jackson@appsecflo.com" />
          <p />
          <h6 className="bold-text">Description</h6>
          ZenMana and MSAT have announced today the planned merger of their business operations to offer a unified
          mobile and communications solution to the enterprise market. ZenMana will acquire the MSAT assets, people
          and customer contracts and the merged business will operate under the ZenMana brand.
          <p />
          <Button outline><HistoryIcon />Engagement history</Button>
          <ProjectMember img={LastModifiedImage} name="last modified by Effendi" post="4/16/2019 12:35" />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
