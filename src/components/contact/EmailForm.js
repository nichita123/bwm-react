import React, { Component } from "react";
import axiosService from "../../services/axios-service";
import { PhoneInput } from "./../shared/form/PhoneInput";

class EmailForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      phone: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
  }

  onPhoneChange = phone => {
    this.setState({ phone });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    const axiosInstance = axiosService.getInstance();
    const { name, email, message, phone } = this.state;

    const form = axiosInstance.post("/contact-form", {
      name,
      email,
      message,
      phone
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="example@gmail.com"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name and Surname</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="John Wick"
            onChange={this.handleChange}
          />
        </div>

        <PhoneInput
          value={this.state.phone}
          onPhoneChange={this.onPhoneChange}
        />

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="5"
            placeholder="What's the problem?"
            onChange={this.handleChange}
          />
        </div>

        <button className="btn btn-success ml-auto">Send</button>
      </form>
    );
  }
}

export default EmailForm;
