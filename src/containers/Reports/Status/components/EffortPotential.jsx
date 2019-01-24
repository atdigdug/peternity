import React from 'react';
import { Link } from 'react-router-dom';
import Panel from '../../../../shared/components/Panel';

const Ava1 = `${process.env.PUBLIC_URL}/img/dongxi.jpg`;
const Ava2 = `${process.env.PUBLIC_URL}/img/chandra.jpg`;
const Ava3 = `${process.env.PUBLIC_URL}/img/asha.jpg`;
const Ava4 = `${process.env.PUBLIC_URL}/img/bhageeta.jpg`;
const Ava6 = `${process.env.PUBLIC_URL}/img/effendi.jpg`;

const MyCompetitors = () => (
  <Panel lg={4} xl={4} md={12} xs={12} title="Effort Potential">
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava1} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">DongXi</p>
        <p className="dashboard__competitor-result">285 days</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava2} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Chandra</p>
        <p className="dashboard__competitor-result">109 days</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava3} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Asha</p>
        <p className="dashboard__competitor-result">92 days</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava4} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Bhageeta</p>
        <p className="dashboard__competitor-result">73 days</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava6} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Effendi</p>
        <p className="dashboard__competitor-result">41 days</p>
      </div>
    </Link>
  </Panel>
);

export default MyCompetitors;
