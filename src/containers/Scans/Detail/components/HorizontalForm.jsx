import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

class HorizontalForm extends PureComponent {
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
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">DAST URL</span>
                <div className="form__form-group-field">
                  <Field
                    name="disableInput"
                    component="input"
                    type="text"
                    placeholder="www.sonia.app"
                    disabled
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">DAST Applicance</span>
                <div className="form__form-group-field">
                  <Field
                    name="disableInput"
                    component="input"
                    type="text"
                    placeholder="orange-pekoe"
                    disabled
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Internal Site IP</span>
                <div className="form__form-group-field">
                  <Field
                    name="disableInput"
                    component="input"
                    type="text"
                    placeholder="137.1.4.67"
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
})(translate('common')(HorizontalForm));
