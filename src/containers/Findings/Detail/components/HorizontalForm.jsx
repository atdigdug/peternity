import React, { PureComponent } from 'react';
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
      <form className="form form--horizontal" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Detail 1</span>
          <div className="form__form-group-field">
            <Field
              name="disableInput"
              component="input"
              type="text"
              placeholder="Never really"
              disabled
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Detail 2</span>
          <div className="form__form-group-field">
            <Field
              name="disableInput"
              component="input"
              type="text"
              placeholder="wrote down"
              disabled
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Detail 3</span>
          <div className="form__form-group-field">
            <Field
              name="disableInput"
              component="input"
              type="text"
              placeholder="finding fields"
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
})(translate('common')(HorizontalForm));
