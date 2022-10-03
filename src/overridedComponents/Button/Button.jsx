import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ThemeWrapper from "../../theme/ThemeWrapper";
import InputAdornment from "@mui/material/InputAdornment";

export default class MuiNumberField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
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
        <TextField
          fullWidth
          placeholder={component.label}
          type="number"
          variant="outlined"
          defaultValue={component.defaultValue}
          InputProps={{
            startAdornment: !!component.prefix ? (
              <InputAdornment position="start">
                {component.prefix}
              </InputAdornment>
            ) : null,
          }}
          onChange={this.setValue}
          disabled={component.disabled ? "disabled" : false}
        />
      </ThemeWrapper>
    );
  }
}
