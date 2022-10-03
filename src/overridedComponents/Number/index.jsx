import React from "react";
import ReactDOM from "react-dom";
import { Components } from "formiojs";
import { ReactComponent } from "@formio/react";
import editForm from "./Number.settingForm";
import MuiNumberField from "./Number";

Components.components.number = class NumberField extends ReactComponent {
  /**
   * This function tells the form builder about your component. It's name, icon and what group it should be in.
   */

  constructor(component, options, data) {
    super(component, options, data);
    this.data[component.key] = component.defaultValue || component.min;
    this.value = component.defaultValue || component.min;
    component.hideLabel = true;
  }

  static get builderInfo() {
    return {
      title: "Number",
      icon: "hashtag",
      group: "basic",
      documentation: "/userguide/forms/form-components#number",
      weight: 30,
      schema: NumberField.schema(),
    };
  }

  /**
   * This function is the default settings for the component. At a minimum you want to set the type to the registered
   * type of your component (i.e. when you call Components.setComponent('type', MyComponent) these types should match.
   */
  static schema(...extend) {
    return ReactComponent.schema(
      {
        type: "number",
        label: "Number",
        key: "number",
        validate: {
          min: "",
          max: "",
          step: "any",
          integer: "",
        },
      },
      ...extend
    );
  }

  init() {
    return super.init();
  }

  destroy() {
    return super.destroy();
  }

  /*
   * Defines the settingsForm when editing a component in the builder.
   */
  static editForm = editForm;

  /**
   * This function is called when the DIV has been rendered and added to the DOM. You can now instantiate the react component.
   *
   * #returns ReactInstance
   */

  attachReact(element, setReactInstance) {
    const reactInstance = ReactDOM.render(
      <MuiNumberField
        component={this.component}
        value={this.dataValue}
        onChange={(e) => {
          this.value = e.target.value;
          this.data[this.component.key] = e.target.value;
          this.triggerChange();
        }}
      />,
      element
    );

    setReactInstance(reactInstance);
    return element;
  }

  /**
   * Automatically detach any react components.
   *
   * @param element
   */
  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
};
