export default [
  {
    key: "labelPosition",
    ignore: true,
  },
  {
    key: "placeholder",
    ignore: true,
  },
  {
    key: "description",
    ignore: true,
  },
  {
    key: "autofocus",
    ignore: true,
  },
  {
    key: "tooltip",
    ignore: true,
  },
  {
    key: "tabindex",
    ignore: true,
  },
  {
    key: "tableView",
    ignore: true,
  },
  {
    key: "modalEdit",
    ignore: true,
  },
  {
    type: "number",
    label: "Min Value",
    key: "min",
    input: true,
    weight: 1,
    placeholder: "0",
    tooltip: "Enter minimal value for the slider",
  },
  {
    type: "number",
    label: "Max Value",
    key: "max",
    input: true,
    weight: 1,
    placeholder: "0",
    tooltip: "Enter maximum value for the slider",
  },
  {
    type: "number",
    label: "Step",
    key: "step",
    input: true,
    weight: 1,
    placeholder: "1",
    tooltip: "Enter step for the slider",
  },
];
