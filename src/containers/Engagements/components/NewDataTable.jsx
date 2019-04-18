import React from 'react';
import {
  Progress, Table, Card, CardBody,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const EngagementDataTable = () => (
  <Card>
    <CardBody>
      <Table responsive hover className="table--bordered dashboard__audience-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Apps</th>
            <th>Consultant</th>
            <th>Due Date</th>
            <th>Risk Rating</th>
            <th>FloScore</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6752</td>
            <td><NavLink to="/engagements/detail">Merger Release</NavLink></td>
            <td>5</td>
            <td>Bob</td>
            <td>7/27/2019</td>
            <td>Low</td>
            <td>893</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={80} />
              </div>
            </td>
          </tr>
          <tr>
            <td>19106</td>
            <td>Spring Release</td>
            <td>4</td>
            <td>Alice</td>
            <td>2/25/2020</td>
            <td>Low</td>
            <td>795</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={20} />
              </div>
            </td>
          </tr>
          <tr>
            <td>1514</td>
            <td>CRM Update</td>
            <td>3</td>
            <td>Chandra</td>
            <td>3/21/2020</td>
            <td>High</td>
            <td>95</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={80} />
              </div>
            </td>
          </tr>
          <tr>
            <td>9553</td>
            <td>China 20/20</td>
            <td>2</td>
            <td>Delta</td>
            <td>12/25/2019</td>
            <td>High</td>
            <td>137</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={40} />
              </div>
            </td>
          </tr>
          <tr>
            <td>8302</td>
            <td>Engagement 8302</td>
            <td>4</td>
            <td>Echo</td>
            <td>6/10/2019</td>
            <td>Medium</td>
            <td>469</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={60} />
              </div>
            </td>
          </tr>
          <tr>
            <td>17485</td>
            <td>Engagement 17485</td>
            <td>5</td>
            <td>Foxtrot</td>
            <td>3/29/2020</td>
            <td>TBD</td>
            <td>TBD</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={0} />
              </div>
            </td>
          </tr>
          <tr>
            <td>16124</td>
            <td>Engagement 16124</td>
            <td>3</td>
            <td>Gerry</td>
            <td>10/20/2019</td>
            <td>High</td>
            <td>344</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={60} />
              </div>
            </td>
          </tr>
          <tr>
            <td>11704</td>
            <td>Engagement 11704</td>
            <td>2</td>
            <td>Howard</td>
            <td>4/15/2019</td>
            <td>High</td>
            <td>133</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={60} />
              </div>
            </td>
          </tr>
          <tr>
            <td>9373</td>
            <td>Engagement 9373</td>
            <td>4</td>
            <td>Indigo</td>
            <td>10/17/2019</td>
            <td>Low</td>
            <td>942</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={40} />
              </div>
            </td>
          </tr>
          <tr>
            <td>11839</td>
            <td>Engagement 11839</td>
            <td>3</td>
            <td>Juliet</td>
            <td>11/30/2019</td>
            <td>Medium</td>
            <td>613</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={80} />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default EngagementDataTable;
