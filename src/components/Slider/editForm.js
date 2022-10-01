import nestedComponentForm from "formiojs/components/_classes/nested/NestedComponent.form";
import display from "./editForm/display";
// import data from "./editForm/data";
export default function (...extend) {
  const editForm = nestedComponentForm(
    [
      {
        key: "display",
        components: display,
      },
      // {
      //   key: "data",
      //   label: "Data",
      //   components: data,
      //   weight: 20,
      // },
      {
        key: "addons",
        ignore: true,
      },
    ],
    ...extend
  );

  return editForm;
}
