/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";
import editForm from "./MuiNumberField.settingForm";
import MuiNumberField from "./MuiNumberField";

export default class NumberField extends ReactComponent {
  /**
   * This function tells the form builder about your component. It's name, icon and what group it should be in.
   */

  constructor(component, options, data) {
    super(component, options, data);
    this.data[component.key] = component.defaultValue || component.min;
    this.value = component.defaultValue || component.min;
  }

  static get builderInfo() {
    return {
      title: "Mui Number",
      icon: "hashtag",
      documentation: "",
      weight: -10,
      schema: NumberField.schema(),
    };
  }

  /**
   * This function is the default settings for the component. At a minimum you want to set the type to the registered
   * type of your component (i.e. when you call Components.setComponent('type', MyComponent) these types should match.
   */
  static schema() {
    return ReactComponent.schema({
      type: "muinumberfield",
      label: "Number Field",
      hideLabel: true,
    });
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
}
