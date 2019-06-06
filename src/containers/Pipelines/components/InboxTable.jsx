/* eslint-disable react/no-array-index-key,react/no-unused-state */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import EmailListItem from './EmailListItem';
import { EmailsProps } from '../../../shared/prop-types/EmailProps';
import Panel from '../../../shared/components/Panel';

export default class InboxTable extends PureComponent {
  static propTypes = {
    emails: EmailsProps.isRequired,
    onLetter: PropTypes.func.isRequired,
  };

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  };

  render() {
    const { emails, onLetter } = this.props;

    return (
      <Panel lg={12} xl={6} md={12} xs={12} title="Messages">
        <div className="inbox__container">
          <div className="inbox__content">
            <Table className="table--bordered inbox__emails-table" responsive>
              <tbody>
                {emails.slice(1, 15).map((e, i) =>
                  <EmailListItem email={e} key={i} onLetter={onLetter} />)}
              </tbody>
            </Table>
          </div>
        </div>
      </Panel>
    );
  }
}
