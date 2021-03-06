import React, { PureComponent } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';

const JaneDoeProfile = `${process.env.PUBLIC_URL}/img/janedoeprofile.jpg`;

export default class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    return (
      <div className="topbar__profile">
        <button className="topbar__avatar" type="button" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={JaneDoeProfile} alt="avatar" />
          <p className="topbar__avatar-name">Jane Doe</p>
          <DownIcon className="topbar__icon" />
        </button>
        {this.state.collapse && <button className="topbar__back" type="button" onClick={this.toggle} />}
        <Collapse isOpen={this.state.collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink title="Profile" icon="list" path="/pages/one" />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink title="Log Out" icon="exit" path="/" />
          </div>
        </Collapse>
      </div>
    );
  }
}
