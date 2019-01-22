import React from 'react';
import { Link } from 'react-router-dom';
import Panel from '../../../../shared/components/Panel';

const Ava1 = `${process.env.PUBLIC_URL}/img/11.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/12.png`;
const Ava3 = `${process.env.PUBLIC_URL}/img/14.png`;
const Ava4 = `${process.env.PUBLIC_URL}/img/15.png`;
const Ava5 = `${process.env.PUBLIC_URL}/img/photo_notification.png`;
const Ava6 = `${process.env.PUBLIC_URL}/img/ava.png`;

const MyCompetitors = () => (
  <Panel lg={6} xl={6} md={12} xs={12} title="Effort Potential">
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava1} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Peter Jackson</p>
        <p className="dashboard__competitor-result">12,254 km</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava2} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Lora Melbourn</p>
        <p className="dashboard__competitor-result">11,224 km</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava3} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Cat Mew</p>
        <p className="dashboard__competitor-result">9,921 km</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava4} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Liza Orly</p>
        <p className="dashboard__competitor-result">7,875 km</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava6} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Michael Bro</p>
        <p className="dashboard__competitor-result">6,154 km</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava5} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Charlie Sunset</p>
        <p className="dashboard__competitor-result">6,154 km</p>
      </div>
    </Link>
  </Panel>
);

export default MyCompetitors;
