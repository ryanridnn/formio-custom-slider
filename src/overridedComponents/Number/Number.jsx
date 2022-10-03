import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ThemeWrapper from "../../theme/ThemeWrapper";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";

export default class MuiNumberField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
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
          style={{
            margin: component.description && "0 0 .5rem",
          }}
          type="number"
          fullWidth
          label={component.label}
          placeholder={component.placeholder || component.label}
          variant="outlined"
          defaultValue={component.defaultValue}
          InputProps={{
            startAdornment: !!component.prefix ? (
              <InputAdornment position="start">
                {component.prefix}
              </InputAdornment>
            ) : null,
            endAdornment: !!component.suffix ? (
              <InputAdornment position="start">
                {component.suffix}
              </InputAdornment>
            ) : null,
          }}
          onChange={this.setValue}
          disabled={component.disabled ? true : false}
          spellCheck={component.spellcheck}
        />
      </ThemeWrapper>
    );
  }
}
