/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from "formiojs";
const FieldComponent = Components.components.field;
import editForm from "./editForm";

class CheckMatrix extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
    this.checks = [];
  }

  static schema() {
    return FieldComponent.schema({
      type: "checkmatrix",
      numRows: 3,
      numCols: 3,
    });
  }

  static editForm = editForm;

  static builderInfo = {
    title: "Check Matrix",
    group: "basic",
    icon: "fa fa-table",
    weight: 70,
    documentation: "http://help.form.io/userguide/#table",
    schema: CheckMatrix.schema(),
  };

  get tableClass() {
    let tableClass = "table ";
    ["striped", "bordered", "hover", "condensed"].forEach((prop) => {
      if (this.component[prop]) {
        tableClass += `table-${prop} `;
      }
    });
    return tableClass;
  }

  get emptyValue() {
    return [];
  }

  renderCell(row, col) {
    return this.renderTemplate("input", {
      input: {
        type: "input",
        ref: `${this.component.key}-${row}`,
        attr: {
          id: `${this.component.key}-${row}-${col}`,
          class: "form-control",
          type: "checkbox",
        },
      },
    });
  }

  render() {
    return super.render(
      this.renderTemplate("checkmatrix", {
        tableClass: this.tableClass,
        renderCell: this.renderCell.bind(this),
      })
    );
  }

  /**
   * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
   * elements to attach functionality to.
   *
   * @param element
   * @returns {Promise}
   */
  attach(element) {
    const refs = {};

    for (let i = 0; i < this.component.numRows; i++) {
      refs[`${this.component.key}-${i}`] = "multiple";
    }

    this.loadRefs(element, refs);

    this.checks = [];
    for (let i = 0; i < this.component.numRows; i++) {
      this.checks[i] = Array.prototype.slice.call(
        this.refs[`${this.component.key}-${i}`],
        0
      );

      // Attach click events to each input in the row
      this.checks[i].forEach((input) => {
        this.addEventListener(input, "click", () => this.updateValue());
      });
    }

    // Allow basic component functionality to attach like field logic and tooltips.
    return super.attach(element);
  }

  /**
   * Get the value of the component from the dom elements.
   *
   * @returns {Array}
   */
  getValue() {
    var value = [];
    for (var rowIndex in this.checks) {
      var row = this.checks[rowIndex];
      value[rowIndex] = [];
      for (var colIndex in row) {
        var col = row[colIndex];
        value[rowIndex][colIndex] = !!col.checked;
      }
    }
    return value;
  }

  /**
   * Set the value of the component into the dom elements.
   *
   * @param value
   * @returns {boolean}
   */
  setValue(value) {
    if (!value) {
      return;
    }
    for (var rowIndex in this.checks) {
      var row = this.checks[rowIndex];
      if (!value[rowIndex]) {
        break;
      }
      for (var colIndex in row) {
        var col = row[colIndex];
        if (!value[rowIndex][colIndex]) {
          return false;
        }
        let checked = value[rowIndex][colIndex] ? 1 : 0;
        col.value = checked;
        col.checked = checked;
      }
    }
  }
}

export default class Slider extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
    this.value = null;
  }

  static schema() {
    return FieldComponent.schema({
      type: "slider",
      label: "Slider",
      min: 0,
      max: 100,
      step: 1,
    });
  }

  static editForm = editForm;

  static builderInfo = {
    title: "Slider",
    group: "basic",
    icon: "fa fa-sliders",
    weight: 70,
    documentation: "http://help.form.io/userguide/#table",
    schema: Slider.schema(),
  };

  get inputInfo() {
    const info = super.inputInfo;
    return info;
  }

  init() {
    super.init();
  }

  render() {
    const template = this.getTemplate();

    return super.render(
      this.renderTemplate("html", {
        content: template,
      })
    );
  }

  attach(element) {
    const refs = {
      "slider-input": "single",
      "slider-progress": "single",
      "slider-value": "single",
    };

    this.loadRefs(element, refs);

    this.data[this.component.key] = this.component.min;
    // this.triggerChange();

    this.refs["slider-input"].addEventListener(
      "input",
      this.handleSliderChange
    );

    this.refs["slider-input"].addEventListener(
      "mouseenter",
      this.handleSliderHoverIn
    );
    this.refs["slider-input"].addEventListener(
      "mouseleave",
      this.handleSliderHoverOut
    );

    return super.attach(element);
  }

  detach() {
    return super.detach();
  }

  destroy() {
    return super.destroy();
  }

  getValue() {
    return Number(this.refs["slider-input"].value);
  }

  setValue(value) {
    this.refs["slider-input"].value = value || this.component.min;
  }

  getTemplate() {
    return `
      <div class="slider-wrapper>
        <div class="slider-label">${this.component.label}</>
        <div class="slider ${this.component.customClass} ${
      this.component.hidden && "slider--hidden"
    }">
          <div class="slider__progress" ref="slider-progress"></div>
          <div class="slider__value" ref="slider-value">${
            this.component.min
          }</div>
          <input
            type="range"
            min="${this.component.min}"
            max="${this.component.max} "
            step="${this.component.step}"
            value="${this.component.min}"
            class="slider__input"
            ref="slider-input"
            ${this.component.disabled && "disabled"}
          />
        </div>
      </div>
    `;
  }

  handleSliderChange = (e) => {
    // save value

    const value = Number(e.target.value);

    this.value = value;
    this.data[this.component.key] = value;
    this.triggerChange();

    // handle slider progress

    this.refs["slider-progress"].style.width =
      ((value - this.component.min) /
        (this.component.max - this.component.min)) *
        100 +
      "%";

    // handle slider value

    this.refs["slider-value"].innerText = value;
    this.refs["slider-value"].style.left =
      ((value - this.component.min) /
        (this.component.max - this.component.min)) *
        100 +
      "%";
    const offset = -(
      ((value - this.component.min) /
        (this.component.max - this.component.min)) *
        18 -
      9
    );
    this.refs["slider-value"].style.transform = `translate(calc(-48% ${
      offset >= 0 ? "+" : "-"
    } ${Math.abs(offset)}px), 0)`;
  };

  handleSliderHoverIn = () => {
    this.refs["slider-value"].classList.add("slider__value--show");
  };

  handleSliderHoverOut = () => {
    this.refs["slider-value"].classList.remove("slider__value--show");
  };
}
