import React, { Component } from "react";
import ReactPhoneInput from "react-phone-input-2";

export class PhoneInput extends Component {
  render() {
    const {onPhoneChange, value, type, name} = this.props;
    return (
      <ReactPhoneInput
        defaultCountry="hu"
        inputExtraProps={{
          name: "phone",
          required: true,
          autoFocus: true
        }}
        onChange={onPhoneChange}
        value={value}
        type={type}
        name={name}
      />
    );
  }
}
