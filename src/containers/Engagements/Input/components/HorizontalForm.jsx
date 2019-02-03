import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

class HorizontalForm extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    const { handleSubmit, reset, t } = this.props;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('forms.basic_form.horizontal_form')}</h5>
              <h5 className="subhead">Labels are left from fields</h5>
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
                <span className="form__form-group-label">
Project name,
Project manager,
Project status,
Expected to go live date,
System information owner, created by, last modified by,
Priority,
Resolution,
Assignee,
Date reported, created, updated,
Date assigned to AppSec, date acknowledged, date consultant assigned, date request fulfilled,
CSEQ submitted date,
Is self-service,
Comments
                </span>
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
})(translate('common')(HorizontalForm));
