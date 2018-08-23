import React from 'react';


export class FileUpload extends React.Component {

  constructor() {
    super();

    this.state = {
      selectedFile: null
    }

    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
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
            onChange={this.fileSelectedHandler} />
        </div>
        {touched &&
          ((error && <div className='alert alert-danger'>{error}</div>))}
      </div>
    )
  }
}