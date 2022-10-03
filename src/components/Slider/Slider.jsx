import React, { useState, useEffect } from "react";
import MuiSlider from "@mui/material/Slider";
import ThemeWrapper from "../../theme/ThemeWrapper";

export default class Slider extends React.Component {
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
        <MuiSlider
          defaultValue={component.defaultValue}
          valueLabelDisplay="auto"
          step={component.step}
          min={component.min}
          max={component.max}
          onChange={this.setValue}
        />
      </ThemeWrapper>
    );
  }
}
