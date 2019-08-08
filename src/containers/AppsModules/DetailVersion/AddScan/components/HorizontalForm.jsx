import React, { PureComponent } from 'react';
import {
  Card, CardBody, Button, ButtonToolbar,
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
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Adding Coverity Scan:</h5>
          </div>
          <form className="form form--horizontal" onSubmit={handleSubmit}>
            <div className="form__form-group">
              <span className="form__form-group-label">Coverity Instance</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder="http://127.0.0.1:8080"
                />
              </div>
              <span className="form__form-group-description">
                Pre-populated from other Coverity scans.
              </span>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Coverity project</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder="Nightly-Build-Partner-Mobile-App-2-14"
                />
              </div>
              <span className="form__form-group-description">
                Project name derived from similar apps. Please review.
              </span>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Coverity stream</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder="Nightly-Build-Stream-Partner-Mobile-App-2-14"
                />
              </div>
              <span className="form__form-group-description">
                Stream name derived from similar apps. Please review.
              </span>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Custom Coverity commands</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder="./build/scripts/run-build.sh -c -t Linux-X64-Generic"
                />
              </div>
              <span className="form__form-group-description">
                Custom command suggested from other Coverity scans. Please review.
              </span>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">On command failure</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">On successful execution</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Schedule</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder="H H 1,15 1-11 *"
                />
              </div>
              <span className="form__form-group-description">
                Schedule was suggested based off similar scans by similar apps.
              </span>
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
    );
  }
}

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})((HorizontalForm));
