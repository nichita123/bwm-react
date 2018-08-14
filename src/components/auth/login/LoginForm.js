import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'components/shared/form/Input';
import { required, minLength4 } from '../../shared/form/validators';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid } = props
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <Field
        name="email"
        type="email"
        label='Email'
        className='form-control'
        component={Input}
        validate={[required, minLength4]}
      />
      <Field
        name="password"
        type="password"
        label='Password'
        className='form-control'
        component={Input}
        validate={[required, minLength4]}
      />
      <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
        Register
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm)