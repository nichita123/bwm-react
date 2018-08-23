import React, { Component } from 'react';
import axiosService from 'services/axios-service';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'components/shared/form/Input';
import { Select } from 'components/shared/form/Select';
import { TextArea } from 'components/shared/form/TextArea';
import { FileUpload } from 'components/shared/form/FileUpload';
import { ResError } from 'components/shared/form/ResError';
// import { required, minLength4 } from 'components/shared/form/validators';
const axiosInstance = axiosService.getInstance();

class CreateForm extends Component {
  constructor() {
    super();

    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  fileUploadHandler = () => {
    const {selectedFile} = this.props;

    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);

    axiosInstance.post('/rentals', fd, {
      OnUploadProgress: progressEvent => {
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%');
      }
    })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    const { handleSubmit, pristine, submitting, submitCb, valid, options, errors } = this.props;

    return (
      <form onSubmit={handleSubmit(submitCb)}>
        <Field
          name="title"
          type="text"
          label='Title'
          className='form-control'
          component={Input}
        />
        <Field
          name="description"
          type="text"
          label='Description'
          rows='6'
          className='form-control'
          component={TextArea}
        />
        <Field
          name="city"
          type="text"
          label='City'
          className='form-control'
          component={Input}
        />
        <Field
          name="street"
          type="text"
          label='Street'
          className='form-control'
          component={Input}
        />
        <Field
          options={options}
          name="category"
          label='Category'
          className='form-control'
          component={Select}
        />
        <Field
          name="image"
          label='Image'
          component={FileUpload}
        />
        <Field
          name="bedrooms"
          type="number"
          label='Bedrooms'
          className='form-control'
          component={Input}
        />
        <Field
          name="dailyRate"
          type="text"
          label='Daily Rate'
          className='form-control'
          symbol='$'
          component={Input}
        />
        <Field
          name="shared"
          type="checkbox"
          label='Shared'
          className='form-control'
          component={Input}
        />
        <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting} onClick={this.fileUploadHandler}>
          Create Rental
      </button>
        <ResError errors={errors} />
      </form>
    )
  }
}

export default reduxForm({
  form: 'rentalCreateForm',
  initialValues: { shared: false, category: 'apartment' }
})(CreateForm)