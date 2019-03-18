import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class HorizontalForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, reset } = this.props;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">New Engagement</h5>
              <h5 className="subhead">Enter as many fields as possible</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">ID</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Status</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Start Date</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">End Date</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Description</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Requestor Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Requestor Email</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Requestor Phone</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Requestor preferred method of contact</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Project Manager</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Project Status</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Expected to go live date</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">System Information Owner</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Created By</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Last Modified By</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Priority</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Resolution</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Assignee</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Date Reported</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Date Created</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Date Updated</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Date assigned to AppSec</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Date Acknowledged</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Date Consultant Assigned</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Date Request Fulfilled</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">CSEQ Submitted Date</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Is Self-Service</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Comments</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Button type="button" onClick={reset}>
                  Cancel
                </Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})((HorizontalForm));
