import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { v4 as uuidv4 } from "uuid";

export default class MuiTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.component.defaultValue,
    };
    this.checkboxid = uuidv4();
  }

  setValue = (e) => {
    this.setState(
      (prevState) => ({ value: e.target.value }),
      () => this.props.onChange(e)
    );
  };

  render() {
    const component = this.props.component;

    return (
      <ThemeWrapper>
        <Stack direction="row" alignItems="center">
          {component.inputType === "checkbox" && (
            <Checkbox
              defaultValue={component.defaultValue}
              onChange={this.setValue}
              disabled={component.disabled ? true : false}
              size="small"
              style={{ width: "24px", height: "24px", marginRight: ".25rem" }}
              id={this.checkboxid}
            />
          )}
          {component.inputType === "radio" && (
            <Radio
              defaultValue={component.defaultValue}
              onChange={this.setValue}
              disabled={component.disabled ? true : false}
              size="small"
              style={{ width: "24px", height: "24px", marginRight: ".25rem" }}
              id={this.checkboxid}
            />
          )}
          <label style={{ marginBottom: 0 }} for={this.checkboxid}>
            {component.label}
          </label>
        </Stack>
      </ThemeWrapper>
    );
  }
}
