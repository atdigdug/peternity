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
          <span className="form__form-group-label">WhiteHat Asset Name</span>
          <div className="form__form-group-field">
            <Field
              name="disableInput"
              component="input"
              type="text"
              placeholder="citrus-tea"
              disabled
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">WhiteHat Asset Priority</span>
          <div className="form__form-group-field">
            <Field
              name="disableInput"
              component="input"
              type="text"
              placeholder="1"
              disabled
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">WhiteHat Service Level</span>
          <div className="form__form-group-field">
            <Field
              name="disableInput"
              component="input"
              type="text"
              placeholder="Business Enterprise"
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
