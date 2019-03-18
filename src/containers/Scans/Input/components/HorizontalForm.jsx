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
              <h5 className="bold-text">New Whitehat Scan</h5>
              <h5 className="subhead">Enter as many fields as possible</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">DAST URL</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Whitehat Asset Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Whitehat Service Level</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Whitehat Primary Hostname URL</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Whitehat Asset Priority</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Whitehat Scan Speed</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">DAST Internal Site</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">DAST Appliance</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Internal Site IP</span>
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
