import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class HorizontalForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
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
              placeholder="orange-pekoe-1"
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
    );
  }
}

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})((HorizontalForm));
