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
    const { changeToLight, changeToDark } = this.props;

    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Home" icon="home" route="/dashboard_default" onClick={this.hideSidebar} />
          <SidebarCategory title="Reports" icon="pie-chart">
            <SidebarLink title="Action" route="/reports/action" onClick={this.hideSidebar} />
            <SidebarLink title="Status" route="/reports/status" onClick={this.hideSidebar} />
            <SidebarLink title="Business" route="/reports/business" onClick={this.hideSidebar} />
            <SidebarLink title="CISO" route="/reports/ciso" onClick={this.hideSidebar} />
            <SidebarLink title="Dev Team" route="/reports/devteam" onClick={this.hideSidebar} />
            <SidebarLink title="External" route="/reports/external" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarLink title="Engagements" icon="arrow-up-circle" route="/engagements" onClick={this.hideSidebar} />
          <SidebarLink title="Apps/Modules" icon="layers" route="/appsmodules" onClick={this.hideSidebar} />
          <SidebarLink title="Scans" icon="magnifier" route="/scans" onClick={this.hideSidebar} />
          <SidebarLink title="Findings" icon="bug" route="/findings" onClick={this.hideSidebar} />
          <SidebarLink title="Risks" icon="warning" route="/findings/riskanalysis" onClick={this.hideSidebar} />
          <SidebarLink title="Dev Support" icon="code" route="/devsupport" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Settings" icon="cog">
            <SidebarLink title="Connections" route="/settings/connections" onClick={this.hideSidebar} />
            <button className="sidebar__link" type="button" onClick={changeToLight}>
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button className="sidebar__link" type="button" onClick={changeToDark}>
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
