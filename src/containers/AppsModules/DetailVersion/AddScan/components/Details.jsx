/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody,
} from 'reactstrap';

const Summary = () => (
  <Card>
    <CardBody>
      Coverity: <p />
      <p />
      Coverity instance: <p />
      Coverity project: <p />
      Coverity stream: <p />
      Check for issues <p />
      Customize change set <p />
      Custom Coverity commands: command1, command2<p />
      On command failure: <p />
        Skip any remaining commands <p />
        Continue executing any remaining commands <p />
      On successful execution: <p />
        Persist the intermediate directory <p />
        Clean up the intermediate directory <p />
      <p />
      Suggested schedule: <p />
        H H 1,15 1-11 * <p />
        (This schedule was suggested based off similar scans by similar apps.)
    </CardBody>
  </Card>
);

export default Summary;
