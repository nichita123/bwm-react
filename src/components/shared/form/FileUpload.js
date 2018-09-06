import React from 'react';
import axios from 'axios';
import axiosService from 'services/axios-service';

export class FileUpload extends React.Component {

  constructor() {
    super();

    this.state = {
      selectedFile: null
    }
  }

  fileSelectedHandler = event => {
    this.setState({
      image: event.target.files[0]
    })
  }

  uploadFile = () => {
    const formData = new FormData();
    const axiosInstance = axiosService.getInstance();

    formData.append('image', this.state.image[0]);

    axiosInstance.post('/image-upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(json => json.imageUrl)
      .catch(err => {

      })
  }

  render() {
    const { label, meta: { touched, error } } = this.props;

    return (
      <div className='form-group'>
        <label>{label}</label>
        <div className='input-group'>
          <input type='file'
            accept='.jpg, .png, .jpeg'
            onChange={this.fileSelectedHandler}
          />
          <button onClick={this.uploadFile}>Upload Image</button>
        </div>
        {touched &&
          ((error && <div className='alert alert-danger'>{error}</div>))}
      </div>
    )
  }
}