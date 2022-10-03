import inputEditForm from "formiojs/components/password/Password.form";

export default function (...extend) {
  const editForm = inputEditForm(
    [
      {
        key: "display",
        components: [
          {
            key: "labelPosition",
            ignore: true,
          },
          {
            key: "autofocus",
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
            key: "hideLabel",
            ignore: true,
          },
          {
            key: "hideInput",
            ignore: true,
          },
          {
            key: "widget.type",
            ignore: true,
          },
          {
            key: "inputMask",
            ignore: true,
          },
          {
            key: "displayMask",
            ignore: true,
          },
          {
            key: "allowMultipleMasks",
            ignore: true,
          },
        ],
      },
      {
        key: "addons",
        ignore: true,
      },
    ],
    ...extend
  );

  return editForm;
}
