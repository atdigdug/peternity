import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Home" icon="home" route="/dashboard_default" onClick={this.hideSidebar} />
          <SidebarCategory title="Reports" icon="chart-bars">
            <SidebarLink title="Action" route="/reports/action" onClick={this.hideSidebar} />
            <SidebarLink title="Status" route="/reports/status" onClick={this.hideSidebar} />
            <SidebarLink title="Business" route="/reports/business" onClick={this.hideSidebar} />
            <SidebarLink title="CISO" route="/reports/ciso" onClick={this.hideSidebar} />
            <SidebarLink title="Dev Team" route="/reports/devteam" onClick={this.hideSidebar} />
            <SidebarLink title="External" route="/reports/external" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarLink title="Engagements" icon="mustache" route="/engagements" onClick={this.hideSidebar} />
          <SidebarLink title="Apps/Modules" icon="mustache" route="/appsmodules" onClick={this.hideSidebar} />
          <SidebarLink title="Scans" icon="mustache" route="/scans" onClick={this.hideSidebar} />
          <SidebarLink title="Findings" icon="mustache" route="/findings" onClick={this.hideSidebar} />
          <SidebarLink title="Dev Support" icon="mustache" route="/devsupport" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Settings" icon="layers">
            <SidebarLink title="Connections" route="/settings/connections" onClick={this.hideSidebar} />
            <button className="sidebar__link" onClick={this.props.changeToLight}>
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button className="sidebar__link" onClick={this.props.changeToDark}>
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Example Pages" icon="diamond">
            <SidebarLink title="Page one" route="/pages/one" onClick={this.hideSidebar} />
            <SidebarLink title="Page two" route="/pages/two" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
