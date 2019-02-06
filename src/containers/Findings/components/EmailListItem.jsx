/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import classNames from 'classnames';

import PaperclipIcon from 'mdi-react/PaperclipIcon';

import { EmailProps } from '../../../shared/prop-types/EmailProps';

export default class EmailListItem extends PureComponent {
  static propTypes = {
    email: EmailProps.isRequired,
    onLetter: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      favorite: false,
    };
  }

  onFavorite = (e) => {
    e.preventDefault();
    this.setState({ favorite: !this.state.favorite });
  };

  render() {
    const { email, onLetter } = this.props;
    const itemClass = classNames({
      'inbox__email-list-item': true,
      'inbox__email-list-item--unread': email.unread,
    });

    return (
      <tr className={itemClass}>
        <td className="inbox__email-table-name" onClick={onLetter}>{email.name}</td>
        <td onClick={onLetter} className="inbox__email-table-preview">
          <Dotdotdot clamp={1}><b>{email.subject}</b> {email.preview}</Dotdotdot>
        </td>
        <td onClick={onLetter}>{email.attach ? <PaperclipIcon /> : ''}</td>
        <td onClick={onLetter} className="inbox__email-table-date">{email.time}</td>
      </tr>
    );
  }
}
