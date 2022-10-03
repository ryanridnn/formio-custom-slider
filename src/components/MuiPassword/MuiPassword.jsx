import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ThemeWrapper from "../../theme/ThemeWrapper";

export default class MuiPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || this.props.component?.min || 0,
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
          type="password"
          label={component.label}
          variant="outlined"
        />
      </ThemeWrapper>
    );
  }
}
