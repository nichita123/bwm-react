import React, { Component } from "react";

class EditableComponent extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
      value: undefined,
      originValue: undefined
    };

    this.handleChange = this.handleChange.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.openEdit = this.openEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  componentDidMount() {
    const { entity, entityField } = this.props;
    const value = entity[entityField];

    this.setState({
      value,
      originValue: value
    });
  }

  cancelEdit() {
    const { originValue } = this.state;
    this.setState({
      isActive: false,
      value: originValue
    });
  }

  openEdit() {
    this.setState({
      isActive: true
    });
  }

  saveEdit() {
    const { updateEntity, entityField } = this.props;
    const { value, originValue } = this.state;

    if (value !== originValue) {
      updateEntity({ [entityField]: value });

      this.setState({
        isActive: false,
        originValue: value
      });
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

}

export default EditableComponent;
