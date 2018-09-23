import React, { Component } from "react";

class EditableInput extends Component {
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
      updateEntity({[entityField]: value});

      this.setState({
        isActive: false,
        originValue: value
      });
    }
  }

  renderComponentView() {
    const { value, isActive } = this.state;
    const { className } = this.props;

    if (isActive) {
      return (
        <React.Fragment>
          <input
            onChange={this.handleChange}
            value={value}
            className={className}
          />
          <button
            onClick={this.saveEdit}
            className="btn btn-outline-success btn-sm btn-editable"
            type="button"
          >
            Save
          </button>
          <button
            onClick={this.cancelEdit}
            className="btn btn-outline-danger btn-sm btn-editable"
            type="button"
          >
            Cancel
          </button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <span className={className}> {value} </span>
        <button
          onClick={this.openEdit}
          className="btn btn-outline-warning btn-sm btn-editable"
          type="button"
        >
          Edit
        </button>
      </React.Fragment>
    );
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return <div id="edit-rental-page">{this.renderComponentView()}</div>;
  }
}

export default EditableInput;
