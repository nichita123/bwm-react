import React, { Component } from "react";
import EditableComponent from "./EditableComponent";

class EditableTextArea extends EditableComponent {
  renderComponentView() {
    const { value, isActive } = this.state;
    const { className, rows, cols } = this.props;

    if (isActive) {
      return (
        <React.Fragment>
          <textarea
            onChange={this.handleChange}
            value={value}
            className={className + " form-control"}
            rows={rows}
            cols={cols}
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

  render() {
    return (
      <div style={this.props.containerStyle} className="edit-rental-page">
        {this.renderComponentView()}
      </div>
    );
  }
}

export default EditableTextArea;
