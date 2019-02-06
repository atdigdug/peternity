import React, { PureComponent } from 'react';
import { ContactProps } from '../../../shared/prop-types/ChatProps';

export default class ChatUser extends PureComponent {
  static propTypes = {
    contact: ContactProps.isRequired,
  };

  render() {
    const { contact } = this.props;
    let lastMessage = '';
    if (contact.messages.length) {
      lastMessage = contact.messages.slice(-1)[0].message;
    } else {
      lastMessage = 'new contact';
    }

    return (
      <p className="chat__contact-last-message">{lastMessage}</p>
    );
  }
}
