import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

class ArchitectureForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
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
    const { handleSubmit } = this.props;

    return (
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Architecture</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Architechture Type</span>
                <div className="form__form-group-field">
                  <Field
                    name="disableInput"
                    component="input"
                    type="text"
                    placeholder="Java Application"
                    disabled
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Field</span>
                <div className="form__form-group-field">
                  <Field
                    name="disableInput"
                    component="input"
                    type="text"
                    placeholder="Value"
                    disabled
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Field</span>
                <div className="form__form-group-field">
                  <Field
                    name="disableInput"
                    component="input"
                    type="text"
                    placeholder="Value"
                    disabled
                  />
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(translate('common')(ArchitectureForm));
