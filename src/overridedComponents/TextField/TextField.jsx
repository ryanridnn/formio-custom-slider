import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ThemeWrapper from "../../theme/ThemeWrapper";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";

export default class MuiTextField extends React.Component {
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
          style={{
            margin:
              (component.showCharCount || component.showWordCount) &&
              "0 0 .5rem",
          }}
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
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          style={{
            margin: !!component.description && "0 0 .2rem",
            fontSize: "14px",
          }}
        >
          {component.showCharCount && (
            <div>
              {this.state.value?.length || 0} Character
              {(this.state.value?.length || 0) > 1 ? "s" : ""}
            </div>
          )}
          {component.showWordCount && (
            <div>
              {this.state.value?.length
                ? this.state.value.trim().split(" ").length
                : 0}{" "}
              Word
              {((this.state.value?.length &&
                this.state.value.trim().split(" ").length) ||
                0) > 1
                ? "s"
                : ""}
            </div>
          )}
        </Stack>
      </ThemeWrapper>
    );
  }
}
