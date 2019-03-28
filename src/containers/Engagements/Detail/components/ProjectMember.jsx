import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ProjectMember extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    post: PropTypes.string,
  };

  static defaultProps = {
    post: '',
  };

  render() {
    const {
      img, name, post,
    } = this.props;

    return (
      <div className="project-member">
        <div className="project-member__avatar-wrap">
          <img src={img} alt="" />
        </div>
        <div>
          <p className="project-member__name">{name}</p>
          <p className="project-member__post">{post}</p>
        </div>
      </div>
    );
  }
}
