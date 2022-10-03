import React, { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ThemeWrapper from "../../theme/ThemeWrapper";

export default class MuiCheckbox extends React.Component {
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
        <FormControlLabel control={<Checkbox />} label={component.label} />
      </ThemeWrapper>
    );
  }
}
